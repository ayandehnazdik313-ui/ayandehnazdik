import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from '../../lib/firebase'
import { getCurrentAppUser } from '../../services/auth'
import type { AppUser } from '../../types/auth'

interface AuthContextValue {
  firebaseUser: User | null
  user: AppUser | null
  loading: boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null)
  const [user, setUser] = useState<AppUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return onAuthStateChanged(auth, async (nextUser) => {
      setFirebaseUser(nextUser)
      if (!nextUser) {
        setUser(null)
        setLoading(false)
        return
      }

      try {
        setUser(await getCurrentAppUser(nextUser))
      } finally {
        setLoading(false)
      }
    })
  }, [])

  const value = useMemo(() => ({ firebaseUser, user, loading }), [firebaseUser, user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
