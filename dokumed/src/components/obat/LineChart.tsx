import { Link, useLocation } from 'react-router-dom';
import { Users, PieChart, LogOut, Pill } from 'lucide-react';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem = ({ to, icon, label, isActive }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 py-3 px-4 rounded-lg ${
        isActive
          ? 'bg-purple-100 text-purple-700'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <div>{icon}</div>
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col h-full bg-white rounded-3xl shadow-sm w-56">
      {/* Logo */}
      <div className="px-6 py-8">
        <div className="flex items-center space-x-2">
          <div className="flex">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full -ml-1"></div>
            <div className="w-3 h-3 bg-purple-200 rounded-full -ml-1"></div>
          </div>
          <span className="text-xl font-bold text-gray-800">
            Doku<span className="text-purple-600">Med</span>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6 space-y-2">
        <NavItem
          to="/dashboard"
          icon={<PieChart size={20} />}
          label="Dashboard"
          isActive={currentPath === '/dashboard'}
        />
        <NavItem
          to="/tenaga-kesehatan"
          icon={<Users size={20} />}
          label="Tenaga Kesehatan"
          isActive={currentPath === '/tenaga-kesehatan'}
        />
        <NavItem
          to="/obat"
          icon={<Pill size={20} />}
          label="Proyeksi Obat"
          isActive={currentPath.includes('/obat')}
        />
      </div>

      {/* Logout */}
      <div className="px-4 py-6">
        <button className="flex items-center space-x-3 py-3 px-4 w-full rounded-lg text-gray-700 hover:bg-gray-100">
          <LogOut size={20} />
          <span className="font-medium">Keluar</span>
        </button>
      </div>
    </div>
  );
}