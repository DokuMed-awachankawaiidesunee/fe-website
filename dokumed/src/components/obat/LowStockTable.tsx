import { IoIosWarning } from "react-icons/io";

const lowStockData = [
  { name: "Paracetamol 500 mg", stock: 5 },
  { name: "Ibuprofen 400 mg", stock: 4 },
  { name: "Amoxicillin 250 mg", stock: 3 },
  { name: "Cetirizine 10 mg", stock: 2 },
  { name: "Omeprazole 20 mg", stock: 5 },
  { name: "Simvastatin 10 mg", stock: 3 },
  { name: "Amlodipine 5 mg", stock: 4 },
  { name: "Metformin 500 mg", stock: 5 },
];

export default function LowStockTable() {
  return (
    <div className="bg-white rounded-2xl p-4  w-full">
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-800">Daftar Obat yang Perlu Diperhatikan</p>
        <p className="text-sm text-gray-500">Last Sync : 24/05/2025 13:00</p>
      </div>

      {/* Scrollable area */}
      <div className="overflow-auto max-h-[4000px]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Nama Obat</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Stok</th>
              <th className="px-2 py-3 text-left text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {lowStockData.map((med, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 text-sm text-gray-700">{med.name}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{med.stock} Unit</td>
                <td className="px-2 py-3 text-red-600 text-sm font-medium flex items-center gap-1">
                  <IoIosWarning className="h-5 w-5" />
                  Rendah
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
