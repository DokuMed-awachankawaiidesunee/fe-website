type TimelineGroupProps = {
  day: string
  date: number
  month: string
  year: number
  entries: React.ReactNode[]
}

export function TimelineGroup({ day, date, month, year, entries }: TimelineGroupProps) {
  return (
    <div className="flex gap-4 relative">
      {/* Vertical line that stretches based on total group height */}
      <div className="absolute left-[40px] top-[100px] bottom-0 w-px bg-purple-primary z-[-1]" />

      {/* Left: Date & badge */}
      <div className="w-20 flex flex-col items-center pt-1 relative z-10">
        <div className="text-center leading-tight">
          <p className="text-xl font-semibold text-purple-primary">{date}</p>
          <p className="text-sm text-purple-primary font-semibold">{month}, {year}</p>
        </div>

        <span className="text-xs mt-2 border border-purple-primary text-purple-primary px-2 py-0.5 rounded-full">
          {day}
        </span>
      </div>

      {/* Right: Entries */}
      <div className="flex-1 flex flex-col gap-4 pb-4">
        {entries}
      </div>
    </div>
  )
}
