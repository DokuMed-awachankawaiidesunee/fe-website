import StatistikCard from "./StatistikCard";
import { IoIosWarning } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { MdDangerous } from "react-icons/md";
import TopUserChart from "./TopUserChart";
import LowStockTable from "./LowStockTable";

export default function StockSummary() {
  return (
    <div className="space-y-8 max-h-full">
      {/* Statistic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatistikCard
          title="Statistik"
          subtitle="Kelebihan Stok"
          value="12.000"
          unit="UNIT"
          icon={<IoIosWarning className="h-8 w-8 text-yellow-500" />}
          bgColor="bg-yellow-50"
        />
        <StatistikCard
          title="Statistik"
          subtitle="Stok Cukup"
          value="90.000"
          unit="UNIT"
          icon={<FaCircleCheck className="h-8 w-8 text-green-700" />}
          bgColor="bg-green-50"
        />
        <StatistikCard
          title="Statistik"
          subtitle="Kekurangan"
          value="24.000"
          unit="UNIT"
          icon={<MdDangerous className="h-8 w-8 text-red-700" />}
          bgColor="bg-red-50"
        />
      </div>

      {/* Chart + Table Section */}
      <div className="h-fit grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="w-full h-full">
          <TopUserChart />
        </div>
        <div className="w-full h-auto">
          <LowStockTable />
        </div>
      </div>
    </div>
  );
}
