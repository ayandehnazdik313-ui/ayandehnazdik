import { AuthProvider, useAuth } from '../features/auth/AuthContext'
import { routes } from '../lib/router'

function AppShell() {
  const { user, loading } = useAuth()

  if (loading) {
    return <main className="app-shell"><section className="hero-card"><p>در حال آماده‌سازی آینده نزدیک…</p></section></main>
  }

  const visibleRoutes = routes.filter((route) => !route.roles || (user && route.roles.includes(user.role)))

  return (
    <main className="app-shell">
      <section className="hero-card">
        <span className="eyebrow">SMART CUSTOMER EXPERIENCE</span>
        <h1>آینده نزدیک</h1>
        <p>هسته اپلیکیشن آماده است. احراز هویت، نقش‌ها و مسیرهای اصلی پروژه به‌صورت ساختاریافته تعریف شده‌اند.</p>
        <nav className="status-grid" aria-label="مسیرهای قابل دسترس">
          {visibleRoutes.map((route) => <span key={route.path}>{route.title}</span>)}
        </nav>
      </section>
    </main>
  )
}

export function App() {
  return <AuthProvider><AppShell /></AuthProvider>
}
