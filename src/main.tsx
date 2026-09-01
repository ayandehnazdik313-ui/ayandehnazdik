import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card" aria-labelledby="app-title">
        <span className="eyebrow">SMART CUSTOMER EXPERIENCE</span>
        <h1 id="app-title">آینده نزدیک</h1>
        <p>
          زیرساخت اولیه پروژه با React، TypeScript و Vite آماده است.
          مرحله بعد اتصال Firebase و ساخت هسته واقعی سفارش است.
        </p>
        <div className="status-grid" aria-label="وضعیت زیرساخت">
          <span>React 19</span>
          <span>TypeScript</span>
          <span>Vite</span>
          <span>RTL / فارسی</span>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
