import { useSignup } from "@/features/auth/auth.api";
import SignupForm from "@/features/auth/SignupForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
});

function SignupPage() {
  const { mutate: signup } = useSignup();

  return (
    <section>
      <SignupForm onSignup={signup} />
    </section>
  );
}
