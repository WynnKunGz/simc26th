import Elysia from "elysia";
import userTable from "./user.table";
import { cleanQuery } from "@/libs/mongoose/utils";
import { findUsersSchema, updateUserSchema } from "./user.schema";

const userApi = new Elysia({ prefix: "/user" })
  .get(
    "/",
    ({ query }) =>
      userTable.find(cleanQuery(query)).select("-password").lean().exec(),
    { query: findUsersSchema }
  )
  .get("/:userId", async ({ error, params: { userId } }) => {
    const user = await userTable.findById(userId).lean().exec();
    return user ? user : error(404, "User not found.");
  })
  .put(
    "/:userId",
    async ({ body, error, params: { userId } }) => {
      const user = await userTable.findByIdAndUpdate(userId, body, {
        new: true,
      });
      return user ? user : error(400, "Failed to update user.");
    },
    { body: updateUserSchema }
  )
  .delete("/:userId", async ({ error, params: { userId } }) => {
    const user = await userTable.findByIdAndDelete(userId).lean().exec();
    return user
      ? "Delete user successfully."
      : error(400, "Failed to delete user.");
  });

export default userApi;
