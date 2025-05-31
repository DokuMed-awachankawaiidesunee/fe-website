import { useState } from "react";
import { Search, Truck } from "lucide-react";
import MedicationChart from "./LineChart";

export default function StockDetail() {
  // State for the selected medication (simulating the Paracetamol example from the design)
  const [selectedMed, setSelectedMed] = useState({
    name: "Paracetamol",
    currentStock: 12000,
    lastSync: "24/05/2025 13:00",
    lastPurchase: {
      date: "23 Januari 2025",
      quantity: 300000,
      usageRatio: 72,
      sales: 24400
    },
    forecast: {
      month: "Agustus 2025",
      leadTime: 10,
      orderDate: "25 Juni 2025"
    }
  });

  // For legend items
  const legendItems = [
    { color: "bg-purple-600", label: "Min Stock" },
    { color: "bg-pink-300", label: "Max Stock" },
    { color: "bg-blue-400", label: "Current Stock" },
  ];
  
  return (
    <div className="w-full">
      {/* Search bar */}
      <div className="mb-6 relative">
        <div className="relative w-72 ml-auto">
          <input
            type="text"
            placeholder="Cari Obat"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Medication title */}
      <h2 className="text-2xl font-semibold mb-6">{selectedMed.name}</h2>

      <div className="grid grid-cols-12 gap-6">
        {/* Left column - Current Stock & Transaction Data */}
        <div className="col-span-12 md:col-span-5 space-y-6">
          {/* Current Stock Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-1">Stok Terkini</h3>
            <p className="text-sm text-gray-500 mb-3">Last Sync : {selectedMed.lastSync}</p>
            <p className="text-3xl font-bold mb-4">{selectedMed.currentStock.toLocaleString()} UNIT</p>
            
            <div className="bg-green-50 p-3 rounded-lg flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-green-700">Stok masih tersedia</p>
            </div>
          </div>

          {/* Transaction Data Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4 pb-2 border-b">Data Transaksi Terakhir</h3>
            
            {/* Purchase Date */}
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-1">Tanggal Pembelian</p>
              <p className="text-xl font-semibold">{selectedMed.lastPurchase.date}</p>
            </div>
            
            {/* Purchase Quantity */}
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-1">Kuantitas Pembelian</p>
              <p className="text-xl font-semibold">{selectedMed.lastPurchase.quantity.toLocaleString()} UNIT</p>
            </div>
            
            {/* Usage Ratio */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Ratio Pemakaian</p>
              <div className="relative h-4 bg-purple-100 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-purple-600 rounded-full"
                  style={{ width: `${selectedMed.lastPurchase.usageRatio}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-3xl font-bold">{selectedMed.lastPurchase.usageRatio}%</span>
                <span className="text-sm text-gray-500 self-end">
                  Sales: Rp{selectedMed.lastPurchase.sales.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Forecast */}
        <div className="col-span-12 md:col-span-7">
          <div className="bg-white p-6 rounded-lg shadow-sm h-full">
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-medium mb-1">Proyeksi Kebutuhan Obat</h3>
              <h2 className="text-2xl font-bold mb-6">{selectedMed.forecast.month}</h2>
              
              {/* Chart */}
              <div className="flex-grow mb-6">
                <div className="w-full h-full min-h-[250px] relative">
                  {/* Legend */}
                  <div className="absolute top-0 right-0 flex items-center space-x-4">
                    {legendItems.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                        <span className="text-sm">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart component */}
                  <div className="mt-8">
                    <MedicationChart />
                  </div>
                </div>
              </div>
              
              {/* Lead Time Info */}
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <Truck className="text-purple-700" size={24} />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-500">Lead Time</p>
                  <p className="font-medium">{selectedMed.forecast.leadTime} Hari</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-sm">
                  <p className="text-amber-700">
                    Berdasarkan prediksi, anda perlu memesan stok obat baru pada <strong>{selectedMed.forecast.orderDate}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}