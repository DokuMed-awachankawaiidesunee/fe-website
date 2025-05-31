type TimelineEntryProps = {
  doctorName: string;
  noteDate: string;
  note: string;
};

export function TimelineEntry({
  doctorName,
  noteDate,
  note,
}: TimelineEntryProps) {
  return (
    <div className="bg-white rounded-xl border-2 border-neutral-300 p-4">
      <div className="flex items-center gap-4 mb-2">
        {/* Doctor icon container */}
        <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center">
          <img src="/doctor_ic.svg" alt={doctorName} className="w-6 h-6" />
        </div>
        <div>
          <div className="text-lg font-semibold">{doctorName}</div>
          <div className="text-sm text-gray-500">{noteDate}</div>
        </div>
      </div>
      <p className="text-md text-gray-700">{note}</p>
    </div>
  );
}
