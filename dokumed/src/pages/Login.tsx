import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Right-side mascot */}
      <img
        src='/mascot-login.png'
        alt="Mascot"
        className="absolute bottom-0 right-0 w-[50%] max-w-[400px]"
      />

      <div className="z-10 flex flex-col items-center px-6 py-12 w-full max-w-sm">
        {/* Logo */}
        <img src='dokumed-logo.svg' alt="DokuMed" className="h-14 mb-6" />

        {/* Form */}
        <form className="w-full space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium  mb-1">
              Email
            </label>
            <Input id="email" type="email" placeholder="Masukkan email Anda" className='rounded-xl' />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <Input id="password" type="tel" placeholder="Masukkan nomor telepon" className='rounded-xl' />
          </div>

          <Button type="submit" className="w-full rounded-2xl h-12">
            Konfirmasi Gejala
          </Button>
        </form>
      </div>
    </div>
  )
}
