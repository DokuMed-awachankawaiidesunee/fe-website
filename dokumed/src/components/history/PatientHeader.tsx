type PatientHeaderProps = {
  name: string;
  age: number;
  gender: string;
  symptoms: string;
  medicine: string;
  diagnosis: string;
};

export function PatientHeader({
  name,
  age,
  gender,
  symptoms,
  medicine,
  diagnosis
}: PatientHeaderProps) {
  return (
    <div className="flex flex-col gap-6 mb-6">
      <div className="flex flex-row items-center gap-4">
        <h2 className="text-3xl">
          {name}, {age} Tahun
        </h2>
        <div className="flex-1">
          <span className="px-3 py-0.5 text-sm border rounded-full text-purple-primary border-purple-primary">
            {gender}
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex items-start gap-2">
          <img
            src="mascot-flipped.svg"
            alt="Avatar"
            className="w-12 h-12 rounded-full bg-neutral-200 p-1"
          />
        </div>
        <div className="flex-1 mt-2 bg-neutral-300 rounded-xl space-y-5 p-4">
          <div>
            <p className="text-lg font-semibold">Gejala</p>
            <p className="text-md text-gray-700">{symptoms}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Rekomendasi Obat</p>
            <p className="text-md text-gray-700">{medicine}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Gejala</p>
            <p className="text-md text-gray-700">{diagnosis}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
