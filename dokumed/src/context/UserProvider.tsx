import { type ReactNode, useState, useEffect } from 'react'
import { UserContext } from './UserContext'
import type { User } from '@/utils/interfaces'

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch {
        localStorage.removeItem('user')
        setUser(undefined)
      }
    }
    setLoading(false)
  }, [])

  const login = () => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch {
        setUser(undefined)
      }
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(undefined)
  }

  return (
    <UserContext.Provider value={{ user, loading, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
