import * as v from "valibot";

const userSchema = v.object({
  username: v.pipe(v.string(), v.nonEmpty("Please enter your username.")),
  email: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your email."),
    v.email("The email address is invalid formatted.")
  ),
  password: v.pipe(v.string(), v.nonEmpty("Please enter your password.")),
});

export default userSchema;
