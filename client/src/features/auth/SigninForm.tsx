import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { SigninInputType, SigninOutputType, signinSchema } from "./auth.schema";

type SigninFormProps = {
  onSignin: (data: SigninOutputType) => void;
};

function SigninForm({ onSignin }: SigninFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninInputType>({
    resolver: valibotResolver(signinSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSignin)}>
      <div>
        <label>username</label>
        <input {...register("username")} />
        {errors.username ? <span>{errors.username.message}</span> : null}
      </div>
      <div>
        <label>password</label>
        <input {...register("password")} />
        {errors.password ? <span>{errors.password.message}</span> : null}
      </div>
      <button type="submit">signin</button>
    </form>
  );
}

export default SigninForm;
