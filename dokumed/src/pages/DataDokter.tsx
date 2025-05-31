"use client"

import { useState } from "react"
import { Search, Plus, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react"

// Data dummy untuk dokter
const dummyDokter = [
  { id: "1020940398", nama: "Wiga Silalahi", poli: "Poli Jantung" },
  { id: "1020940399", nama: "Budi Santoso", poli: "Poli Umum" },
  { id: "1020940400", nama: "Siti Nurhaliza", poli: "Poli Anak" },
  { id: "1020940401", nama: "Joko Widodo", poli: "Poli Gigi" },
  { id: "1020940402", nama: "Dewi Sartika", poli: "Poli Mata" },
  { id: "1020940403", nama: "Ahmad Dahlan", poli: "Poli Jantung" },
  { id: "1020940404", nama: "Kartini Putri", poli: "Poli Kulit" },
  { id: "1020940405", nama: "Hasan Sadikin", poli: "Poli Saraf" },
  { id: "1020940406", nama: "Ratna Sari", poli: "Poli THT" },
  { id: "1020940407", nama: "Bambang Pamungkas", poli: "Poli Bedah" },
  { id: "1020940408", nama: "Tuti Wulandari", poli: "Poli Jantung" },
  { id: "1020940409", nama: "Rudi Hartono", poli: "Poli Paru" },
]

export default function DataDokter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null)

  // Filter dokter berdasarkan pencarian
  const filteredDokter = dummyDokter.filter(
    (dokter) =>
      dokter.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dokter.id.includes(searchTerm) ||
      dokter.poli.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Sorting
  const sortedDokter = [...filteredDokter].sort((a, b) => {
    if (!sortConfig) return 0

    if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "ascending" ? -1 : 1
    }
    if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "ascending" ? 1 : -1
    }
    return 0
  })

  // Pagination
  const indexOfLastDokter = currentPage * rowsPerPage
  const indexOfFirstDokter = indexOfLastDokter - rowsPerPage
  const currentDokter = sortedDokter.slice(indexOfFirstDokter, indexOfLastDokter)
  const totalPages = Math.ceil(sortedDokter.length / rowsPerPage)

  // Handle sorting
  const requestSort = (key: string) => {
    let direction = "ascending"
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  // Generate pagination items
  const paginationItems = []
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      paginationItems.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
            currentPage === i ? "bg-purple-primary text-white" : "text-neutral-800 hover:bg-neutral-200"
          }`}
        >
          {i}
        </button>,
      )
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      paginationItems.push(
        <span key={i} className="px-2 text-neutral-800">
          ...
        </span>,
      )
    }
  }

  return (
    <div className="p-6 bg-neutral-300 h-full font-family-regular">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xxl font-bold text-dark-blue font-family-bold">Daftar Dokter</h1>
        <div className="text-right">
          <div className="text-lg font-semibold text-dark-blue font-family-semibold">Rumah Sakit Dama</div>
          <div className="text-sm text-neutral-800 font-family-regular">Admin</div>
        </div>
      </div>

      {/* Search and Add */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-800" size={20} />
          <input
            type="text"
            placeholder="Cari gejala Anda"
            className="pl-10 pr-4 py-3 w-full border border-neutral-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-primary bg-white text-dark-blue font-family-regular"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="bg-purple-primary hover:bg-purple-primary/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-family-medium font-medium transition-colors">
          <Plus size={20} />
          <span>Tambah</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
        <table className="w-full">
          <thead>
            <tr className="bg-neutral-200 border-b border-neutral-500">
              <th
                className="px-6 py-3 text-left text-sm font-semibold text-dark-blue cursor-pointer font-family-semibold"
                onClick={() => requestSort("id")}
              >
                ID Dokter
              </th>
              <th
                className="px-6 py-3 text-left text-sm font-semibold text-dark-blue cursor-pointer font-family-semibold"
                onClick={() => requestSort("nama")}
              >
                <div className="flex items-center">
                  Nama Dokter
                  {sortConfig?.key === "nama" && (
                    <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
                  )}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-sm font-semibold text-dark-blue cursor-pointer font-family-semibold"
                onClick={() => requestSort("poli")}
              >
                <div className="flex items-center">
                  Poli
                  {sortConfig?.key === "poli" && (
                    <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
                  )}
                </div>
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-dark-blue font-family-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentDokter.map((dokter, index) => (
              <tr
                key={dokter.id}
                className={`border-b border-neutral-200 hover:bg-neutral-200/50 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-neutral-200/30"
                }`}
              >
                <td className="px-6 py-2 text-sm text-dark-blue font-family-regular">{dokter.id}</td>
                <td className="px-6 py-2 text-sm text-dark-blue font-family-regular">{dokter.nama}</td>
                <td className="px-6 py-2 text-sm text-dark-blue font-family-regular">{dokter.poli}</td>
                <td className="px-6 py-2 text-right">
                  <button className="text-neutral-800 hover:text-dark-blue transition-colors">
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm text-neutral-800 font-family-regular">Tunjukkan banyak baris</span>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value))
              setCurrentPage(1)
            }}
            className="border border-neutral-500 rounded px-3 py-1 text-sm bg-white text-dark-blue font-family-regular focus:outline-none focus:ring-2 focus:ring-purple-primary"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-md text-neutral-800 hover:bg-neutral-200 disabled:opacity-50 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>

          {paginationItems}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-md text-neutral-800 hover:bg-neutral-200 disabled:opacity-50 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
