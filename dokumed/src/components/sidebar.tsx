import { LogOut, User, Pill } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white h-full rounded-2xl p-6 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10 mt-2">
          <img src="/dokumed-logo.svg" alt="DokuMed Logo" className="h-[100%] " />
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-2">
          <Link
            to="/dashboard/dokter"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium ${
              isActive('/dashboard/dokter')
                ? 'bg-purple-100 text-purple-800'
                : 'text-gray-800 hover:bg-gray-100'
            }`}
          >
            <User className="w-5 h-5" />
            Tenaga Kesehatan
          </Link>

          <Link
            to="/dashboard/obat"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium ${
              isActive('/dashboard/obat')
                ? 'bg-purple-100 text-purple-800'
                : 'text-gray-800 hover:bg-gray-100'
            }`}
          >
            <Pill className="w-5 h-5" />
            Proyeksi Obat
          </Link>
        </nav>
      </div>

      {/* Logout */}
      <button className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg font-medium">
        <LogOut className="w-5 h-5" />
        Keluar
      </button>
    </div>
  );
}
