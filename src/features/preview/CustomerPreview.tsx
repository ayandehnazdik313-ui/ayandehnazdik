import { useMemo, useState } from 'react'

const categories = ['همه', 'قهوه', 'نوشیدنی سرد', 'کیک و دسر', 'میان‌وعده']

const products = [
  { id: 'coffee-1', category: 'قهوه', name: 'آمریکانو', description: 'قهوه اسپرسو با آب داغ', price: 85000, icon: '☕', featured: true },
  { id: 'coffee-2', category: 'قهوه', name: 'لاته', description: 'اسپرسو، شیر بخار داده شده و فوم', price: 115000, icon: '🥛', featured: true },
  { id: 'cold-1', category: 'نوشیدنی سرد', name: 'آیس کافی', description: 'قهوه سرد با یخ و شیر', price: 125000, icon: '🧊', featured: false },
  { id: 'dessert-1', category: 'کیک و دسر', name: 'چیزکیک', description: 'چیزکیک تازه با سس مخصوص', price: 135000, icon: '🍰', featured: true },
]

const formatPrice = (value: number) => `${new Intl.NumberFormat('fa-IR').format(value)} تومان`

export function CustomerPreview() {
  const [category, setCategory] = useState('همه')
  const [cartCount, setCartCount] = useState(0)
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null)

  const visibleProducts = useMemo(
    () => category === 'همه' ? products : products.filter((product) => product.category === category),
    [category],
  )

  return (
    <div dir="rtl" className="customer-preview">
      <header className="customer-header">
        <div>
          <span className="brand-mark">آ</span>
          <div><strong>آینده نزدیک</strong><small>تجربه‌ای متفاوت، همین حالا</small></div>
        </div>
        <button className="cart-button" onClick={() => setCartCount((count) => count + 0)} aria-label="سبد خرید">
          🛒 <b>{cartCount}</b>
        </button>
      </header>

      <section className="welcome-card">
        <div>
          <span>خوش آمدید 👋</span>
          <h1>چی میل داری؟</h1>
          <p>سفارش بده، استراحت کن؛ ما آماده‌ایم.</p>
        </div>
        <div className="welcome-cup">☕</div>
      </section>

      <div className="category-row" role="tablist" aria-label="دسته‌بندی منو">
        {categories.map((item) => (
          <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>

      <section className="menu-section">
        <div className="section-heading"><div><span>انتخاب امروز</span><h2>منوی محبوب</h2></div><span className="count">{visibleProducts.length} محصول</span></div>
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article key={product.id} className="product-card" onClick={() => setSelected(product)}>
              <div className="product-art">{product.icon}</div>
              <div className="product-content">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-footer"><strong>{formatPrice(product.price)}</strong><button onClick={(event) => { event.stopPropagation(); setCartCount((count) => count + 1) }}>+</button></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="product-modal" onClick={(event) => event.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)}>×</button>
            <div className="modal-art">{selected.icon}</div>
            <span>{selected.category}</span><h2>{selected.name}</h2><p>{selected.description}</p>
            <strong>{formatPrice(selected.price)}</strong>
            <button className="primary" onClick={() => { setCartCount((count) => count + 1); setSelected(null) }}>افزودن به سبد</button>
          </div>
        </div>
      )}
    </div>
  )
}
