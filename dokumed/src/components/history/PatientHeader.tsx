type PatientHeaderProps = {
  name: string;
  age: number;
  gender: string;
  avatarUrl: string;
  symptoms: string;
};

export function PatientHeader({
  name,
  age,
  gender,
  avatarUrl,
  symptoms,
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
        <div className="flex items-center gap-2">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-14 h-14 rounded-full"
          />
        </div>
        <div className="flex-1 mt-2 bg-neutral-300 rounded-xl p-4">
          <p className="text-lg font-semibold">Gejala</p>
          <p className="text-md text-gray-700">{symptoms}</p>
        </div>
      </div>
    </div>
  );
}
