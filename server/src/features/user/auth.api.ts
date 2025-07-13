import Elysia from "elysia";
import userTable from "./user.table";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";
import { signinSchema, signupSchema } from "./auth.schema";

const authApi = new Elysia({ prefix: "/auth" })
  .post(
    "/signup",
    async ({ body, error, status }) => {
      const { username, email, password } = body;

      const duplicated = await userTable
        .findOne({ $or: [{ username }, { email }] })
        .lean()
        .exec();
      if (duplicated)
        return error(409, "Your username or email already exist.");

      const hashedPassword = await argon2.hash(password);
      const user = await userTable.create({
        ...body,
        password: hashedPassword,
      });
      if (!user) return error(400, "Failed to create user.");

      return status(201, "Sign up successfully.");
    },
    { body: signupSchema }
  )
  .post(
    "/signin",
    async ({ body, cookie: { authToken }, error }) => {
      const { username, password } = body;

      const user = await userTable.findOne({ username }).lean().exec();
      if (!user) return error(401, "Your username not found.");

      const matchPassword = await argon2.verify(user.password, password);
      if (!matchPassword) return error(401);

      const userId = user._id.toString();
      const role = user.role;

      authToken.set({
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      authToken.value = jwt.sign(
        { userId },
        process.env.AUTH_TOKEN_SECRETKEY as string,
        { expiresIn: "1d" }
      );
      return { userId, username, role };
    },
    { body: signinSchema }
  )
  .delete("/signout", ({ cookie: { authToken }, error }) => {
    if (!authToken.value) return error(204);
    authToken.remove();
  })
  .get("/refresh", async ({ cookie: { authToken }, error }) => {
    if (!authToken.value) return error(403);

    try {
      const { userId } = jwt.verify(
        authToken.value,
        process.env.AUTH_TOKEN_SECRETKEY as string
      ) as { userId: string };

      const user = await userTable.findById(userId).lean().exec();
      if (!user) return error(401);

      const { username, role } = user;
      return { userId, username, role };
    } catch (err) {
      throw error(401);
    }
  });

export default authApi;
