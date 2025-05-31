"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { FaCircleCheck } from "react-icons/fa6"
import { IoIosWarning } from "react-icons/io"
import { TbTruckDelivery } from "react-icons/tb"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// Generate random data points for each day in 4 weeks
const generateDataPoints = (baseValue: number, variance: number) => {
  return Array.from({ length: 28 }, () => baseValue + Math.random() * variance - variance / 2)
}

const minStockData = generateDataPoints(5000, 2000)
const maxStockData = generateDataPoints(7000, 3000)
const currentStockData = generateDataPoints(4000, 4000)

// Medicines data
const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    stock: 12000,
    lastPurchase: "23 Januari 2025",
    purchaseQty: 300000,
    usageRatio: 72,
    salesAmount: 24400,
  },
  {
    id: 2,
    name: "Ibuprofen",
    stock: 8500,
    lastPurchase: "15 Januari 2025",
    purchaseQty: 250000,
    usageRatio: 65,
    salesAmount: 18600,
  },
  {
    id: 3,
    name: "Amoxicillin",
    stock: 5200,
    lastPurchase: "10 Februari 2025",
    purchaseQty: 150000,
    usageRatio: 48,
    salesAmount: 12800,
  },
  {
    id: 4,
    name: "Cetirizine",
    stock: 3800,
    lastPurchase: "5 Maret 2025",
    purchaseQty: 100000,
    usageRatio: 82,
    salesAmount: 32400,
  },
  {
    id: 5,
    name: "Omeprazole",
    stock: 7200,
    lastPurchase: "28 Februari 2025",
    purchaseQty: 200000,
    usageRatio: 58,
    salesAmount: 16500,
  },
]

export default function StockDetail() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMedicine, setSelectedMedicine] = useState(medicines[0])
  const [showDropdown, setShowDropdown] = useState(false)

  // Filter medicines based on search term
  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Chart data
  const chartData = {
    labels: Array.from({ length: 28 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Min Stock",
        data: minStockData,
        borderColor: "rgb(147, 51, 234)",
        backgroundColor: "rgba(147, 51, 234, 0.5)",
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Max Stock",
        data: maxStockData,
        borderColor: "rgb(244, 114, 182)",
        backgroundColor: "rgba(244, 114, 182, 0.5)",
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Current Stock",
        data: currentStockData,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          callback: (value: any, index: number) => {
            const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"]
            if (index === 0 || index === 7 || index === 14 || index === 21) {
              return weeks[Math.floor(index / 7)]
            }
            return ""
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          callback: (value: any) => {
            if (value === 0) return "0"
            if (value === 1000) return "1k"
            if (value === 5000) return "5k"
            if (value === 10000) return "10k"
            return ""
          },
        },
      },
    },
  }

  // Get stock status
  const getStockStatus = (stock: number) => {
    if (stock > 10000)
      return {
        text: "Stok masih tersedia",
        icon: <FaCircleCheck className="text-green-600" size={20} />,
        bgColor: "bg-green-50",
      }
    if (stock > 5000)
      return {
        text: "Stok menipis",
        icon: <IoIosWarning className="text-yellow-500" size={20} />,
        bgColor: "bg-yellow-50",
      }
    return {
      text: "Stok hampir habis",
      icon: <IoIosWarning className="text-red-600" size={20} />,
      bgColor: "bg-red-50",
    }
  }

  const stockStatus = getStockStatus(selectedMedicine.stock)

  const handleMedicineSelect = (medicine: any) => {
    setSelectedMedicine(medicine)
    setSearchTerm(medicine.name)
    setShowDropdown(false)
  }

  return (
    <div className="space-y-6 bg-transparent">
      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Cari Obat"
          className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-900"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setShowDropdown(e.target.value.length > 0)
          }}
          onFocus={() => setShowDropdown(searchTerm.length > 0)}
        />

        {/* Dropdown */}
        {showDropdown && filteredMedicines.length > 0 && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {filteredMedicines.map((medicine) => (
              <div
                key={medicine.id}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                onClick={() => handleMedicineSelect(medicine)}
              >
                <div className="font-medium text-gray-900">{medicine.name}</div>
                <div className="text-sm text-gray-500">Stok: {medicine.stock.toLocaleString()} unit</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Medicine Name */}
      <h2 className="text-3xl font-semibold text-gray-900">{selectedMedicine.name}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Stock Info */}
        <div className="space-y-6">
          {/* Current Stock */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="mb-2">
              <p className="text-gray-500 text-sm">Stok Terkini</p>
              <p className="text-xs text-gray-400">Last Sync : 24/05/2025 13:00</p>
            </div>
            <h3 className="text-4xl font-bold mb-4 text-gray-900">{selectedMedicine.stock.toLocaleString()} UNIT</h3>
            <div className={`flex items-center gap-2 py-3 px-4 rounded-lg ${stockStatus.bgColor}`}>
              {stockStatus.icon}
              <span className="text-sm font-medium">{stockStatus.text}</span>
            </div>
          </div>

          {/* Transaction Data */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Data Transaksi Terakhir</h3>
            <div className="border-b pb-4 mb-4">
              <p className="text-gray-500 text-sm">Tanggal Pembelian</p>
              <p className="text-2xl font-bold text-gray-900">{selectedMedicine.lastPurchase}</p>
            </div>
            <div className="border-b pb-4 mb-4">
              <p className="text-gray-500 text-sm">Kuantitas Pembelian</p>
              <p className="text-2xl font-bold text-gray-900">{selectedMedicine.purchaseQty.toLocaleString()} UNIT</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Ratio Pemakaian</p>
              <div className="flex items-center justify-between mt-2">
                <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-purple-600 rounded-full"
                    style={{ width: `${selectedMedicine.usageRatio}%` }}
                  ></div>
                </div>
                <span className="ml-4 text-3xl font-bold text-gray-900">{selectedMedicine.usageRatio}%</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Sales: Rp{selectedMedicine.salesAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Chart and Recommendation */}
        <div className="lg:col-span-2 space-y-6">
          {/* Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Proyeksi Kebutuhan Obat</h3>
              <p className="text-xl font-bold text-gray-900">Agustus 2025</p>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                <span className="text-sm text-gray-600">Min Stock</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                <span className="text-sm text-gray-600">Max Stock</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">Current Stock</span>
              </div>
            </div>

            {/* Chart Container */}
            <div className="h-[300px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="bg-purple-100 p-4 rounded-xl">
                <TbTruckDelivery size={32} className="text-purple-600" />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500">Lead Time</p>
                  <p className="text-xl font-bold text-gray-900">10 Hari</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  Berdasarkan prediksi, anda perlu memesan stok obat baru pada{" "}
                  <span className="font-bold text-purple-600">25 Juni 2025</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
