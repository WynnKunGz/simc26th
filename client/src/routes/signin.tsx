import { useSignin } from "@/features/auth/auth.api";
import SigninForm from "@/features/auth/SigninForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  component: SigninPage,
});

function SigninPage() {
  const { mutate: signin } = useSignin();

  return (
    <section>
      <SigninForm onSignin={signin} />
    </section>
  );
}
