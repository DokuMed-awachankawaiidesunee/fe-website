import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/useUser";

export default function Landing() {
  const { user, loading } = useUser();

  if (loading) return "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white relative overflow-hidden px-4">
      {/* Top section */}
      <div className="h-12"></div>
      <div className="flex flex-col items-center space-y-6 z-10">
        <div>
          <h1 className="font-semibold text-4xl">Selamat Datang Kembali, Dr. {user?.name}</h1>
          <h2 className="text-center text-lg font-medium">
            Silakan masukkan kode unik pasien Anda!
          </h2>
        </div>

        <form className="w-full max-w-sm space-y-4">
          <Input
            type="text"
            placeholder="Masukkan kode unik"
            className="text-left rounded-xl"
          />
          <Button type="submit" className="w-full h-12 rounded-2xl">
            Masukkan Kode
          </Button>
        </form>
      </div>

      {/* Bottom mascot image */}
      <img
        src="/mascot-input.png"
        alt="Mascot"
        className="w-[700px] max-w-[80%] z-0"
      />
    </div>
  );
}
