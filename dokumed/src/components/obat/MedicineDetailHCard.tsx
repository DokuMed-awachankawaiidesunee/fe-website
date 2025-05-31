import { FiCalendar } from "react-icons/fi";

type MedicineDetailCardProps = {
  medicineName: string;
  dosage: string;
  category: string;
  manufacturer: string;
  expiryDate: string;
};

export default function MedicineDetailCard({
  medicineName,
  dosage,
  category,
  manufacturer,
  expiryDate,
}: MedicineDetailCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Detail Obat</h3>
      <div className="border-b border-gray-100 mb-4"></div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Nama Obat</p>
          <p className="text-base font-medium">{medicineName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Dosis</p>
          <p className="text-base font-medium">{dosage}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Kategori</p>
          <p className="text-base font-medium">{category}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Produsen</p>
          <p className="text-base font-medium">{manufacturer}</p>
        </div>
      </div>
      
      <div className="flex items-center p-3 bg-gray-50 rounded-lg mt-2">
        <FiCalendar className="text-gray-500 mr-2" />
        <span className="text-sm text-gray-500">Tanggal Kedaluwarsa</span>
        <span className="ml-auto text-sm font-medium">{expiryDate}</span>
      </div>
    </div>
  );
}