import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white relative overflow-hidden px-4">
      {/* Top section */}
      <div className='h-12'>

      </div>
      <div className="flex flex-col items-center space-y-6 z-10">
        <img src="/dokumed-logo.svg" alt="Logo" className="h-10" />

        <h1 className="text-center text-lg font-medium">
          Silakan masukkan kode unik pasien Anda!
        </h1>

        <form className="w-full max-w-sm space-y-4">
          <Input
            type="text"
            placeholder="Masukkan kode unik"
            className="text-center rounded-xl"
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
  )
}
