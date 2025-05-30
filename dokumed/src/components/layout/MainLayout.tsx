import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <div className="bg-main-bg min-h-screen">
      <main className="mt-8 mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
