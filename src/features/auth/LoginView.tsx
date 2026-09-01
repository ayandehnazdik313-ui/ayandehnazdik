import { useState } from 'react'
import { loginWithEmail, registerWithEmail } from './authService'

export function LoginView() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit() {
    setError(null)
    setBusy(true)
    try {
      if (mode === 'register') {
        if (!name.trim()) throw new Error('نام را وارد کنید')
        await registerWithEmail(name, email, password)
      } else {
        await loginWithEmail(email, password)
      }
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'عملیات ورود ناموفق بود')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="hero-card" aria-labelledby="login-title">
      <span className="eyebrow">AYANDEH NAZDIK</span>
      <h2 id="login-title">{mode === 'login' ? 'ورود' : 'ساخت حساب'}</h2>
      {mode === 'register' && <input placeholder="نام و نام خانوادگی" value={name} onChange={(event) => setName(event.target.value)} />}
      <input type="email" placeholder="ایمیل" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input type="password" placeholder="رمز عبور" value={password} onChange={(event) => setPassword(event.target.value)} />
      {error && <p role="alert">{error}</p>}
      <button type="button" disabled={busy} onClick={submit}>{busy ? 'در حال پردازش…' : mode === 'login' ? 'ورود' : 'ثبت‌نام'}</button>
      <button type="button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
        {mode === 'login' ? 'حساب ندارم' : 'قبلاً حساب ساخته‌ام'}
      </button>
    </section>
  )
}
