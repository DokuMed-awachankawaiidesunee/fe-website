// src/components/obat/TopUserChart.tsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dummy data
const labels = ["M", "T", "W", "T", "F", "S", "S", "M", "W", "F"];
const medicines = [
  "Paracetamol", "Ibuprofen", "Amoxicillin", "Cetirizine", "Omeprazole",
  "Vitamin C", "Metformin", "Atorvastatin", "Simvastatin", "Amlodipine",
];
const usageHours = [7.5, 2, 5, 3, 6.5, 4.2, 3.1, 6.0, 5.3, 7.0];

const data = {
  labels,
  datasets: [
    {
      label: "Jam Pemakaian",
      data: usageHours,
      backgroundColor: "#6366f1",
      borderRadius: 8,
      hoverBackgroundColor: "#4f46e5",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context: any) {
          const index = context.dataIndex;
          return `${medicines[index]} — ${context.formattedValue} jam`;
        },
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function TopUserChart() {
  return (
    <div className="bg-white rounded-2xl p-4 w-full h-full">
      <p className="font-semibold text-lg mb-1">Top 10 Pemakaian Obat</p>
      <p className="text-sm text-gray-500 mb-4">Last Sync : 24/05/2025 13:00</p>
      <Bar data={data} options={options} />
    </div>
  );
}
