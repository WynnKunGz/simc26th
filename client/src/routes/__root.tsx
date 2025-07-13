import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-screen">
      <Navbar />

      <main className="p-2">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
