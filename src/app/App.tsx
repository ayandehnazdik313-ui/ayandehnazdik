import { AuthProvider } from '../features/auth/AuthContext'

export function App() {
  return (
    <AuthProvider>
      <div>آینده نزدیک</div>
    </AuthProvider>
  )
}
