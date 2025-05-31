import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CalendarInput } from "./CalendarInput";

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    note: string;
    prescription: string;
    followUpDate?: string;
    noFollowUp: boolean;
  }) => void;
}

export default function NoteModal({
  isOpen,
  onClose,
  onSubmit,
}: NoteModalProps) {
  const [note, setNote] = useState("");
  const [prescription, setPrescription] = useState("");

  const [noFollowUp, setNoFollowUp] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSend = () => {
    onSubmit({ note, prescription, noFollowUp });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-[50vw] min-w-[350px] rounded-2xl p-6 shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <h2 className="text-lg font-semibold mb-4">Tambah Catatan Dokter</h2>

        <div className="space-y-4">
          <div>
            <label className="block font-medium text-sm mb-1">
              Silakan masukkan catatan Anda{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full rounded-xl border border-gray-300 p-3 min-h-[100px]"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">
              Silakan masukkan preskripsi obat
            </label>
            <textarea
              className="w-full rounded-xl border border-gray-300 p-3 min-h-[100px]"
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">
              Apakah pasien memerlukan <i>check-up</i> kembali?
            </label>

            <div className="flex items-center gap-4 mt-2">
              <CalendarInput />
            </div>

            <label className="flex items-center gap-2 mt-2 text-sm">
              <input
                type="checkbox"
                checked={noFollowUp}
                onChange={(e) => setNoFollowUp(e.target.checked)}
              />
              Tidak memerlukan <i>check-up</i> kembali
            </label>
          </div>

          <div className="pt-4">
            <button
              onClick={handleSend}
              className="w-full bg-purple-primary text-white py-3 rounded-2xl hover:bg-purple-primary/70"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
