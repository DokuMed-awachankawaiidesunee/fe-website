type NavbarProps = {
  doctorName: string
  department: string
  onLogout: () => void
}

export function Navbar({ doctorName, department, onLogout }: NavbarProps) {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b-2 border-neutral-300 bg-white">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src="/dokumed-logo.svg" alt="DokuMed Logo" className="h-6" />
        <span className="text-lg font-semibold text-black">
          Doku<span className="text-purple-primary">Med</span>
        </span>
      </div>

      {/* Right: Doctor info + logout */}
      <div className="flex items-center gap-6">
        <div className="text-right leading-tight">
          <p className="text-sm font-semibold text-purple-primary">{doctorName}</p>
          <p className="text-xs text-purple-primary">{department}</p>
        </div>
        <button
          onClick={onLogout}
          className="text-purple-primary text-sm border border-purple-primary rounded-full px-4 py-1 hover:bg-purple-50 transition"
        >
          Keluar
        </button>
      </div>
    </header>
  )
}
