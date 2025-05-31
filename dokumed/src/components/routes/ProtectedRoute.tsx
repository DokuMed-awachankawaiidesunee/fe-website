import { type ReactElement, useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useUser } from '@/context/useUser'

interface ProtectedRouteProps {
  children: ReactElement
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useUser()
  const location = useLocation()
  const [redirectPath, setRedirectPath] = useState<string | null>(null)

  useEffect(() => {
    if (!loading && user) {
      const role = user.role
      if (role === 'Dokter') {
        setRedirectPath('/landing')
      } else if (role === 'Rumah Sakit') {
        setRedirectPath('/dashboard')
      } else {
        setRedirectPath('/landing')
      }
    }
  }, [user, loading])

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="text-gray-500 text-lg">Memuat data pengguna...</span>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (redirectPath && location.pathname === '/') {
    return <Navigate to={redirectPath} replace />
  }

  return children
}
