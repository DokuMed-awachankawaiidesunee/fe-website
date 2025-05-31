import { PatientHeader } from "@/components/history/PatientHeader";
import { TimelineGroup } from "@/components/history/TimelineGroup";
import { TimelineEntry } from "@/components/history/TimelineEntry";

import { Button } from "@/components/ui/button";

export default function History() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <PatientHeader
        name="Stephanie Yu"
        age={34}
        gender="Wanita"
        avatarUrl="/mascot-login.png"
        symptoms="Sakit kepala, muntah muntah"
      />

      <hr className="my-6 border-gray-300" />

      <div className="space-y-8">
        <TimelineGroup
          date={24}
          month="Mei"
          year={2026}
          day="Selasa"
          entries={[
            <TimelineEntry
              key="entry1"
              doctorName="Dr.Wiga Ryan"
              noteDate="12/30/2025"
              note="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis risus..."
            />,
          ]}
        />
        <TimelineGroup
          date={27}
          month="Mei"
          year={2026}
          day="Rabu"
          entries={[
            <TimelineEntry
              key="entry2"
              doctorName="Dr.Wiga Ryan"
              noteDate="12/31/2025"
              note="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis risus..."
            />,
          ]}
        />
      </div>

      <div className="flex justify-end mt-10">
        <Button className="rounded-2xl h-10">Tambah Catatan</Button>
      </div>
    </div>
  );
}
