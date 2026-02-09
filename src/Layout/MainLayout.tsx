import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Nav/Navigation";
import { TopBar } from "../components/TopBar/TopBar";

export function MainLayout() {

  return (
    <div className="min-h-dvh w-full bg-(--main-color) text-(--text-color) antialiased">
      <div className="mx-auto min-h-dvh w-full max-w-7xl px-4 sm:px-6">
        <div className="relative flex min-h-dvh lg:flex-row">
          <aside className="hidden lg:block lg:h-dvh lg:shrink-0 lg:py-6">
            <Navigation variant="desktop" />
          </aside>
          <main className="flex-1 overflow-y-auto py-4 pb-24 lg:ml-10 lg:p-6">
            <TopBar />
            <Outlet />
          </main>
          <div className="lg:hidden">
            <Navigation variant="mobile" />
          </div>
        </div>
      </div>
    </div>
  );
}
