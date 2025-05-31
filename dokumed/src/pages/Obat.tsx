import { useState } from "react";
import StockSummary from "../components/obat/StockSummary";
import StockDetail from "../components/obat/StockDetail";

export default function Obat() {
  const [activeTab, setActiveTab] = useState<"summary" | "detail">("summary");

  return (
    <div className="">
      <div className="w-full flex justify-between">
        <h1 className="text-3xl font-semibold mb-2">Proyeksi Obat</h1>
        <div className="flex flex-col text-right">
          <h2 className="font-semibold">Rumah Sakit Darma</h2>
          <h2 className="text-gray-400">Admin</h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-6">
        <button
          onClick={() => setActiveTab("summary")}
          className={`px-4 py-2 mr-4 text-left ${
            activeTab === "summary"
              ? "border-b-2 border-purple-primary text-purple-primary"
              : "text-gray-500"
          }`}
        >
          Ringkasan Stok Obat
        </button>
        <button
          onClick={() => setActiveTab("detail")}
          className={`px-4 py-2 ${
            activeTab === "detail"
              ? "border-b-2 border-purple-primary text-purple-primary"
              : "text-gray-500"
          }`}
        >
          Detail Per Obat
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "summary" && <StockSummary />}
      {activeTab === "detail" && <StockDetail />}
    </div>
  );
}
