import * as v from "valibot";
import userSchema from "../user/user.schema";

export const signinSchema = v.pick(userSchema, ["username", "password"]);
export type SigninInputType = v.InferInput<typeof signinSchema>;
export type SigninOutputType = v.InferOutput<typeof signinSchema>;

export const signupSchema = v.pipe(
  v.intersect([userSchema, v.object({ confirmPassword: v.string() })]),
  v.forward(
    v.partialCheck(
      [["password"], ["confirmPassword"]],
      ({ password, confirmPassword }) => password === confirmPassword,
      "Password and confirm password do not match."
    ),
    ["confirmPassword"]
  ),
  v.transform(({ confirmPassword, ...input }) => input)
);
export type SignupInputType = v.InferInput<typeof signupSchema>;
export type SignupOutputType = v.InferOutput<typeof signupSchema>;
