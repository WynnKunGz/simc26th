import { t } from "elysia";

const userSchema = t.Object({
  username: t.String(),
  email: t.String(),
  password: t.String(),
  role: t.Union([
    t.Literal("applicant"),
    t.Literal("qualified_applicant"),
    t.Literal("banned_applicant"),
    t.Literal("participant"),
    t.Literal("admin"),
  ]),
});

export default userSchema;

export const findUsersSchema = t.Partial(t.Omit(userSchema, ["password"]));
export const updateUserSchema = t.Partial(
  t.Omit(userSchema, ["username", "password"])
);
