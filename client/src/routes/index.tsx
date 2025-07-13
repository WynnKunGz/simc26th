import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <section>
      <h1>Welcome to SIMC 26th</h1>
    </section>
  );
}
