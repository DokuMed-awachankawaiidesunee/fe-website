import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import api from '@/utils/api'
import { VITE_REST_API_URL } from '@/utils/config'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await api.post('/auth/login', { email, password })
      
      // Store token in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        
        // Store user data
        if (response.data.user) {
          localStorage.setItem('user', JSON.stringify(response.data.user))
          
          // Redirect based on user role
          const userRole = response.data.user.role
          
          if (userRole === 'Dokter') {
            navigate('/landing')
          } else if (userRole === 'Rumah Sakit') {
            navigate('/dashboard')
          } else {
            // Default redirect if role is not recognized
            navigate('/landing')
          }
        } else {
          // Fallback if user data is not available
          navigate('/landing')
        }
      }
    } catch (err: any) {
      console.error('Login error:', err)
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // For Google login, you'll need to handle the role-based redirect after OAuth callback
    window.location.href = `${VITE_REST_API_URL}/auth/google`
  }

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
        <img src='dokumed-logo.svg' alt="DokuMed" className="h-20 mb-6" />

        {/* Error message */}
        {error && (
          <div className="w-full p-3 mb-4 text-sm text-red-500 bg-red-50 rounded-lg">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="w-full space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input 
              id="email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda" 
              className='rounded-xl'
              required 
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password" 
              className='rounded-xl'
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full rounded-2xl h-12"
            disabled={isLoading}
          >
            {isLoading ? 'Sedang masuk...' : 'Masuk'}
          </Button>
          
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Atau masuk dengan</span>
            </div>
          </div>
          
          <Button 
            type="button"
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full rounded-2xl h-12 flex items-center justify-center gap-2"
          >
            <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
            Google
          </Button>
        </form>
      </div>
    </div>
  )
}