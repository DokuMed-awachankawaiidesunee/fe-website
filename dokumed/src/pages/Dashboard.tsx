
import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom"; 

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-[#f4f6fb] font-figtree">
      {/* Sidebar */}
      <div className="py-6 pl-6">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="h-full rounded-2xloverflow-auto">
          <Outlet /> 
        </div>
      </main>
    </div>
  );
}
