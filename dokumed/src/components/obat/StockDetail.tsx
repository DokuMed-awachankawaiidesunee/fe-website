export default function StockDetail() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-yellow-100 p-4 rounded-xl">
        <p className="text-gray-700 font-medium">Statistik Kelebihan Stok</p>
        <p className="text-2xl font-bold">12.000 UNIT</p>
      </div>
      <div className="bg-green-100 p-4 rounded-xl">
        <p className="text-gray-700 font-medium">Statistik Stok Cukup</p>
        <p className="text-2xl font-bold">12.000 UNIT</p>
      </div>
      <div className="bg-red-100 p-4 rounded-xl">
        <p className="text-gray-700 font-medium">Statistik Stok Mau Habis</p>
        <p className="text-2xl font-bold">12.000 UNIT</p>
      </div>
    </div>
  );
}
