import { useState } from 'react'

const sublimationProducts = [
  { id: 'tshirt', title: 'چاپ روی تی‌شرت', desc: 'چاپ با کیفیت سابلیمیشن روی انواع تی‌شرت، هودی و لباس ورزشی', icon: '👕' },
  { id: 'mug', title: 'ماگ و لیوان', desc: 'ماگ سرامیکی، فلزی و لیوان اختصاصی با طرح دلخواه شما', icon: '☕' },
  { id: 'cushion', title: 'کوسن و پارچه', desc: 'کوسن، روبالشتی و محصولات پارچه‌ای با چاپ بادوام', icon: '🛋️' },
  { id: 'plaque', title: 'پلاک و تابلو', desc: 'پلاک فلزی، تابلو و هدایای تبلیغاتی با کیفیت بالا', icon: '🖼️' },
]

const cafeServices = [
  { id: 'print', title: 'خدمات چاپ', desc: 'چاپ اسناد، عکس و فایل‌های دیجیتال با کیفیت بالا', icon: '🖨️' },
  { id: 'internet', title: 'اینترنت پرسرعت', desc: 'دسترسی به اینترنت پایدار برای کار و مطالعه', icon: '🌐' },
  { id: 'coffee', title: 'فضای کافی', desc: 'محیط آرام و مناسب برای کار، مطالعه و استراحت', icon: '☕' },
  { id: 'support', title: 'پشتیبانی فنی', desc: 'کمک در امور نرم‌افزاری و خدمات جانبی دیجیتال', icon: '💻' },
]

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="landing" dir="rtl">
      {/* Header */}
      <header className="landing-header">
        <div className="header-inner">
          <a href="#" className="brand" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
            <span className="brand-mark">آ</span>
            <div className="brand-text">
              <strong>آینده نزدیک</strong>
              <small>چاپ · کافی‌نت · تجربه هوشمند</small>
            </div>
          </a>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="منوی اصلی">
            <button type="button" onClick={() => scrollTo('products')}>محصولات چاپ</button>
            <button type="button" onClick={() => scrollTo('services')}>خدمات کافی‌نت</button>
            <button type="button" onClick={() => scrollTo('custom-order')}>سفارش اختصاصی</button>
            <button type="button" onClick={() => scrollTo('contact')} className="nav-cta">تماس با ما</button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="hero">
          <div className="hero-content">
            <span className="eyebrow">آینده نزدیک · تجربه هوشمند</span>
            <h1>
              چاپ رویاهای شما
              <br />
              <span className="gradient-text">با کیفیت آینده</span>
            </h1>
            <p className="hero-lead">
              مرکز تخصصی چاپ سابلیمیشن و خدمات کافی‌نت. از ایده تا محصول نهایی،
              کنار شما هستیم تا طرح‌هایتان را به واقعیت تبدیل کنیم.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={() => scrollTo('custom-order')}>
                ثبت سفارش اختصاصی
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => scrollTo('products')}>
                مشاهده محصولات
              </button>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="hero-card-float">
              <span>چاپ سابلیمیشن</span>
              <strong>کیفیت حرفه‌ای</strong>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="section products">
          <div className="section-header">
            <span className="section-label">محصولات</span>
            <h2>چاپ سابلیمیشن</h2>
            <p>محصولاتی بادوام، رنگ‌های زنده و کیفیت بالا برای هدیه، تبلیغات و استفاده روزمره</p>
          </div>
          <div className="card-grid">
            {sublimationProducts.map((item) => (
              <article key={item.id} className="feature-card">
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section services">
          <div className="section-header">
            <span className="section-label">خدمات</span>
            <h2>کافی‌نت آینده نزدیک</h2>
            <p>فضایی مدرن برای کار، چاپ و دسترسی به خدمات دیجیتال</p>
          </div>
          <div className="card-grid">
            {cafeServices.map((item) => (
              <article key={item.id} className="feature-card">
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Custom Order CTA */}
        <section id="custom-order" className="section custom-order">
          <div className="cta-panel">
            <div className="cta-content">
              <span className="section-label">سفارش اختصاصی</span>
              <h2>طرح خود را به محصول تبدیل کنید</h2>
              <p>
                لوگو، عکس شخصی، طرح تبلیغاتی یا هر ایده دیگری دارید؟
                فایل یا توضیحات خود را ارسال کنید تا بهترین پیشنهاد را دریافت کنید.
              </p>
              <ul className="cta-list">
                <li>مشاوره رایگان قبل از چاپ</li>
                <li>نمونه و پیش‌نمایش قبل از تولید</li>
                <li>تحویل در کوتاه‌ترین زمان ممکن</li>
              </ul>
            </div>
            <div className="cta-actions">
              <button type="button" className="btn btn-primary btn-lg" onClick={() => scrollTo('contact')}>
                ثبت درخواست سفارش
              </button>
              <p className="cta-note">
                شماره تماس و جزئیات آدرس هنوز نهایی نشده‌اند.
                از طریق فرم تماس یا پیام‌رسان‌ها با ما در ارتباط باشید.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact">
          <div className="section-header">
            <span className="section-label">ارتباط</span>
            <h2>راه‌های تماس</h2>
            <p>برای سفارش، مشاوره یا سوالات خود با ما در تماس باشید</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>اطلاعات تماس</h3>
              <ul className="contact-list">
                <li>
                  <strong>تلفن / واتساپ</strong>
                  <span className="placeholder">هنوز مشخص نشده — لطفاً اطلاعات واقعی را ارائه دهید</span>
                </li>
                <li>
                  <strong>آدرس</strong>
                  <span className="placeholder">هنوز مشخص نشده — لطفاً آدرس واقعی را ارائه دهید</span>
                </li>
                <li>
                  <strong>ساعات کاری</strong>
                  <span className="placeholder">هنوز مشخص نشده</span>
                </li>
              </ul>
            </div>
            <div className="contact-card form-card">
              <h3>فرم درخواست سریع</h3>
              <p className="form-note">
                این فرم فعلاً نمایشی است. پس از اتصال بک‌اند، درخواست‌ها ذخیره خواهند شد.
              </p>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <label>
                  <span>نام</span>
                  <input type="text" name="name" placeholder="نام شما" autoComplete="name" />
                </label>
                <label>
                  <span>شماره تماس</span>
                  <input type="tel" name="phone" placeholder="۰۹۱۲..." autoComplete="tel" dir="ltr" />
                </label>
                <label>
                  <span>نوع درخواست</span>
                  <select name="type" defaultValue="">
                    <option value="" disabled>انتخاب کنید</option>
                    <option value="sublimation">چاپ سابلیمیشن</option>
                    <option value="cafe">خدمات کافی‌نت</option>
                    <option value="both">هر دو</option>
                    <option value="other">سایر</option>
                  </select>
                </label>
                <label>
                  <span>توضیحات</span>
                  <textarea name="message" rows={3} placeholder="توضیح کوتاه درباره درخواست خود..." />
                </label>
                <button type="submit" className="btn btn-primary">ارسال درخواست</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-mark">آ</span>
            <div>
              <strong>آینده نزدیک</strong>
              <p>چاپ سابلیمیشن · کافی‌نت · تجربه هوشمند مشتری</p>
            </div>
          </div>
          <nav className="footer-nav" aria-label="لینک‌های پایین صفحه">
            <button type="button" onClick={() => scrollTo('products')}>محصولات</button>
            <button type="button" onClick={() => scrollTo('services')}>خدمات</button>
            <button type="button" onClick={() => scrollTo('custom-order')}>سفارش</button>
            <button type="button" onClick={() => scrollTo('contact')}>تماس</button>
          </nav>
          <p className="footer-copy">© {new Date().getFullYear()} آینده نزدیک. تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
    </div>
  )
}
