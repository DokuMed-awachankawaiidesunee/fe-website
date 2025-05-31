import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/navbar";

export default function MainLayout() {
  const handleLogout = () => {
    console.log("log out");
  };
  return (
    <div className="bg-main-bg min-h-screen">
      
      <Navbar
        doctorName="Dr.Wiga Ryan"
        department="Poli Jantung"
        onLogout={handleLogout}
      />
      <main className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
