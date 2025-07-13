import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { SignupInputType, SignupOutputType, signupSchema } from "./auth.schema";

type SignupFormProps = {
  onSignup: (data: SignupOutputType) => void;
};

function SignupForm({ onSignup }: SignupFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputType>({
    resolver: valibotResolver(signupSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSignup)}>
      <div>
        <label>username</label>
        <input {...register("username")} />
        {errors.username ? <span>{errors.username.message}</span> : null}
      </div>
      <div>
        <label>email</label>
        <input {...register("email")} />
        {errors.email ? <span>{errors.email.message}</span> : null}
      </div>
      <div>
        <label>password</label>
        <input {...register("password")} />
        {errors.password ? <span>{errors.password.message}</span> : null}
      </div>
      <div>
        <label>confirm password</label>
        <input {...register("confirmPassword")} />
        {errors.confirmPassword ? (
          <span>{errors.confirmPassword.message}</span>
        ) : null}
      </div>
      <button type="submit">signup</button>
    </form>
  );
}

export default SignupForm;
