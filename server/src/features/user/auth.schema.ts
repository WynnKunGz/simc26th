import { t } from "elysia";
import userSchema from "./user.schema";

export const signupSchema = t.Omit(userSchema, ["role"]);
export const signinSchema = t.Pick(userSchema, ["username", "password"]);
