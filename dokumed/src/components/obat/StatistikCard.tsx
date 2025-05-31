import { type ReactNode } from "react";

type StatistikCardProps = {
  title: string;
  subtitle: string;
  value: string;
  unit?: string;
  icon: ReactNode;
  bgColor?: string;
};

export default function StatistikCard({
  title,
  subtitle,
  value,
  unit = "",
  icon,
  bgColor = "bg-yellow-50",
}: StatistikCardProps) {
  return (
    <div className="flex justify-between items-center p-4 rounded-2xl  bg-white w-full max-w-sm">
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-lg font-normal text-gray-800">{subtitle}</p>
        <p className="text-2xl font-bold text-black mt-2">
          {value}{" "}
          <span className="text-sm font-semibold text-gray-600">{unit}</span>
        </p>
      </div>
      <div
        className={`w-18 h-18 flex items-center justify-center rounded-xl ${bgColor}`}
      >
        {icon}
      </div>
    </div>
  );
}
