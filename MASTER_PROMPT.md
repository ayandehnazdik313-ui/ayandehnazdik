# MASTER PROMPT — ساخت اپلیکیشن مشتری «آینده نزدیک»

تو اکنون مسئول طراحی و توسعه یک محصول نرم‌افزاری واقعی برای مجموعه «آینده نزدیک» هستی.

## نقش‌ها
- Senior Android Engineer
- Kotlin Developer
- Jetpack Compose Developer
- Firebase Architect
- Backend Engineer
- UI/UX Designer
- Product Manager
- Database Architect
- Security Engineer
- QA Engineer
- متخصص Customer Experience
- متخصص Gamification
- متخصص اتوماسیون کسب‌وکار

## هدف محصول
اپلیکیشن Android واقعی برای مشتریان «آینده نزدیک» که خدمات چاپ، سابلیمیشن، کافی‌نت و قهوه ارائه می‌کند. مشتری پس از اولین مراجعه بتواند اپ را نصب کند و برای دفعات بعدی سفارش‌ها و بسیاری از خدمات خود را از داخل اپ انجام دهد.

این اپ صرفاً اپ معرفی کسب‌وکار نیست؛ یک **Customer Service Platform** است.

## فناوری
- Kotlin
- Jetpack Compose
- Clean Architecture + MVVM
- Hilt
- Jetpack Navigation Compose
- Firebase Authentication
- Firebase Firestore
- Firebase Storage
- Firebase Cloud Messaging
- Firebase App Check
- Firebase Crashlytics
- Firebase Analytics
- Cloud Functions در صورت نیاز

## زبان و UI
- فارسی و کاملاً RTL
- Dark Premium UI
- Neon Blue
- Metallic Silver
- Glassmorphism محدود
- Modern / Minimal / Professional
- عملکرد روان روی گوشی‌های میان‌رده

## ناوبری اصلی
Bottom Navigation:
- خانه
- سفارش‌ها
- سرگرمی
- باشگاه
- پروفایل

خانه شامل:
- سلام [نام مشتری]
- سفارش چاپ
- سابلیمیشن
- خدمات کافی‌نت
- قهوه
- سفارش‌های من
- سرگرمی
- پیشنهادها
- پشتیبانی

## احراز هویت
Splash → Onboarding کوتاه → ورود/ثبت‌نام با شماره موبایل و OTP با Firebase Phone Authentication.

Customer Model:
- customerId
- firstName
- lastName
- phone
- createdAt
- lastLoginAt
- loyaltyPoints
- gameXP
- level
- displayName
- profileImage
- isActive

اطلاعات حساس و غیرضروری ذخیره نشود.

## خدمات چاپ
دسته‌بندی‌ها:
A4، A5، رنگی، سیاه‌وسفید، گلاسه، عکس، پوستر، تراکت، بروشور، کارت و سایر.

مشتری بتواند فایل، تعداد، نوع کاغذ، رنگی/سیاه‌وسفید، یک‌رو/دورو و توضیحات را مشخص کند. در صورت امکان قیمت تخمینی نمایش داده شود؛ در غیر این صورت اعلام شود قیمت پس از بررسی فایل اعلام می‌شود.

## سابلیمیشن
محصولات نمونه:
ماگ جادویی، ماگ دسته قلبی، ماگ پلیمر، ماگ شیشه‌ای، پازل، قاب، تی‌شرت، مگنت، پوستر فلزی، آلومینیوم، جاکلیدی، پیکسل، آینه، تندیس، ساعت، استند و محصولات مناسبتی.

هر محصول: Image، Name، Description، Price، Options، Availability.

مشتری بتواند عکس، متن، تعداد و توضیحات سفارش را وارد کند.

## خدمات کافی‌نت
ثبت‌نام اینترنتی، خدمات سامانه‌ها، فرم‌ها، پرینت، اسکن، تایپ، ویرایش فایل، ثبت‌نام آزمون، خدمات اداری، دانشجویی، آموزشی و سایر خدمات.

Service Model:
serviceId, name, description, requiredDocuments, estimatedPrice, estimatedTime, isActive

برای اطلاعات حساس، ذخیره‌سازی حداقلی و امن انجام شود.

## قهوه
بخش «قهوه و نوشیدنی» با منو، تصویر، نام، توضیح، قیمت و موجودی. کاربر بتواند نوشیدنی، تعداد و یادداشت را انتخاب و سفارش دهد.

## سفارش‌ها
صفحه «سفارش‌های من» با Order ID، تاریخ، اقلام، قیمت و وضعیت.

وضعیت‌ها:
ثبت شد → در حال بررسی → تأیید شد → در حال انجام → آماده تحویل → تحویل شد / لغو شد.

برای هر سفارش Timeline وضعیت نمایش داده شود.

## آپلود فایل
Firebase Storage با مسیر:
`customers/{customerId}/orders/{orderId}/files/{fileId}`

فرمت‌ها: PDF، JPG، JPEG، PNG، DOC، DOCX.

نمایش نام فایل، حجم، Progress و وضعیت آپلود. دسترسی هر مشتری فقط به فایل‌های خودش باشد.

## سفارش مجدد
از سفارش‌های قبلی گزینه «سفارش مجدد» وجود داشته باشد و اطلاعات قبلی تا حد امکان دوباره بارگذاری شود.

## سفارش سریع
در Home دکمه «سفارش سریع» قرار گیرد تا مشتری تکراری با کمترین مراحل سفارش بدهد.

## حالت انتظار
وقتی سفارش فعال است صفحه‌ای مانند:
«سفارش شما در حال آماده‌سازی است ☕»
نمایش داده شود و زمان تخمینی انتظار و گزینه‌های بازی، مشاهده منوی قهوه، وضعیت سفارش، پیشنهاد ویژه و پشتیبانی ارائه شود.

## سرگرمی و بازی
بخش «سرگرمی» برای زمان انتظار مشتری.

MVP شامل سه Mini Game سبک:
1. چالش ذهن: پازل، الگوی عددی، حافظه و منطق
2. چالش سرعت: انتخاب سریع پاسخ صحیح
3. بازی قهوه: Mini Game سبک با موضوع آماده‌سازی قهوه

هر بازی حدود ۳۰ تا ۹۰ ثانیه، سبک، سریع و مناسب موبایل باشد. از Game Engine سنگین استفاده نشود مگر واقعاً ضروری باشد.

## Daily Challenge
هر روز یک چالش؛ هر مشتری یک بار در روز. Game XP و مقدار محدودی Loyalty Point دریافت کند. سقف امتیاز روزانه از Backend قابل تنظیم باشد.

## Gamification
دو سیستم جدا:
- Game XP برای Level و Ranking
- Loyalty Points برای Reward واقعی

سطوح بازی قابل توسعه باشند.

## باشگاه مشتریان
صفحه باشگاه شامل امتیاز، سطح، تاریخچه، پاداش و تخفیف. سطوح Bronze / Silver / Gold / VIP یا نام فارسی خلاقانه. قوانین از Backend قابل تنظیم.

## Reward
پاداش‌ها می‌توانند شامل تخفیف چاپ، قهوه، سابلیمیشن، کافی‌نت، نوشیدنی رایگان و کوپن باشند.

Reward Model:
rewardId, title, description, pointsRequired, expiresAt, isActive

## ضدتقلب
به Client اعتماد نکن. کاربر نباید بتواند XP، Loyalty، نتیجه بازی، Daily Challenge یا Reward را دستکاری کند. اعتبارسنجی امتیازهای مهم سمت Backend باشد. برای Rewardها Unique Reward ID و Transaction ID استفاده شود.

## Leaderboard
نمایش Display Name، Level، XP و Rank؛ هرگز شماره موبایل و اطلاعات حساس نمایش داده نشود.

## پیشنهادهای هوشمند
بر اساس رفتار مشتری، پیشنهاد سفارش مجدد، محصول مرتبط، قهوه و تخفیف نمایش داده شود. این سیستم باید قابل توسعه باشد.

## اعلان‌ها
Firebase Cloud Messaging برای ثبت سفارش، تغییر وضعیت، آماده شدن سفارش، تخفیف، Reward، چالش روزانه و پیشنهاد ویژه. از Notification Spam جلوگیری شود.

## QR مشتری
برای هر مشتری Customer QR ایجاد شود تا پرسنل بتوانند سریع مشتری را شناسایی کنند.

## پشتیبانی
Ticket System:
ticketId, customerId, subject, message, createdAt, status

Status: Open / In Progress / Answered / Closed

## پروفایل
نام، نام خانوادگی، شماره، تاریخ عضویت، امتیاز، Level و تعداد سفارش‌ها؛ به‌همراه ویرایش، سفارش‌ها، باشگاه، اعلان‌ها، پشتیبانی، تنظیمات و حذف حساب.

## پنل مدیریت
Admin بتواند Customers، Orders، Products، Services، Coffee Menu، Coupons، Rewards، Tickets، Notifications، Loyalty، Games و Challenges را مدیریت کند؛ وضعیت سفارش، فایل، قیمت، محصول، خدمت، پیشنهاد و اعلان را مدیریت کند.

## Firestore
Collections پیشنهادی:
users، customers، orders، orderItems، products، services، coffeeItems، files، notifications، tickets، loyaltyTransactions، gameSessions، gameScores، rewards، rewardTransactions، coupons، dailyChallenges، leaderboards، settings

برای هر Collection، Field، Type، Required، Relation و Index را طراحی کن.

## امنیت
Roleها:
CUSTOMER، ADMIN، STAFF

Role توسط Client تعیین نشود. کاربر فقط اطلاعات، سفارش‌ها، فایل‌ها، تیکت‌ها و امتیازهای خودش را ببیند. کاربر نباید بتواند Role، قیمت، امتیاز یا اطلاعات مشتری دیگر را تغییر دهد/ببیند.

Firebase Security Rules و Storage Rules حرفه‌ای بنویس.

## Privacy
اطلاعات حساس کافی‌نت فقط در صورت ضرورت و با حداقل نگهداری ذخیره شود.

## Performance
Pagination، فشرده‌سازی تصاویر، Queryهای حداقلی و Realtime Listener فقط در موارد ضروری. APK سبک و سریع باشد.

## Offline
در قطع اینترنت Crash ممنوع. پیام مناسب نمایش داده شود. اطلاعات غیرحساس Cache و پس از اتصال Sync شوند.

## Analytics
Eventهای مهم:
app_open، sign_up، login، view_product، view_service، start_order، submit_order، upload_file، repeat_order، play_game، daily_challenge، reward_claim، coupon_used، ticket_created، order_completed

## Error Handling
خطای خام Firebase/Exception به کاربر نمایش داده نشود؛ پیام فارسی مناسب نشان داده شود و جزئیات فنی فقط در Log توسعه‌دهنده باشد.

## تنظیمات کسب‌وکار
نام، شماره تماس، آدرس، Instagram، Telegram، ساعات کاری، قیمت خدمات، محصولات، تخفیف‌ها و Rewardها Hard Code نشوند و از Backend قابل مدیریت باشند.

## ساختار پروژه
پیشنهاد:
`app / core / data / domain / presentation / features`

Features:
auth، home، orders، printing، sublimation، cafe، coffee، games، loyalty، profile، support

## نسخه‌بندی
### Version 1 / MVP
Authentication، Home، Printing، Sublimation، Coffee، Internet Cafe Services، File Upload، Orders، Tracking، Repeat Order، Notifications، Support، Basic Games

### Version 2
Loyalty، Rewards، Coupons، Leaderboard، QR، Advanced Gamification

### Version 3
Advanced CRM، Smart Recommendations، Automated Marketing، SMS Integration، Google Sheets Integration، Advanced Analytics

## تست
سناریوهای ثبت‌نام، Login، سفارش، آپلود، نمایش سفارش، تغییر وضعیت، Notification، Repeat Order، Game، XP، Loyalty، Reward، Ticket، Security Rules و Offline Mode را تست کن.

حتماً بررسی کن User A نتواند اطلاعات User B را مشاهده کند.

## Build
پروژه باید قابلیت ساخت Debug APK، Release APK و AAB داشته باشد. راهنمای Firebase، google-services.json، Application ID و هماهنگی Package Name را ارائه کن.

## روش توسعه
قبل از کدنویسی:
1. Product Architecture
2. MVP Scope
3. Version 1/2/3
4. Screen Map
5. Navigation Architecture
6. Firebase Architecture
7. Firestore Schema
8. Storage Architecture
9. Security Architecture
10. Project Folder Structure
11. Development Roadmap
12. Technical Risks
13. External APIs
14. Decisions Needed

را ارائه کن.

سپس منتظر تأیید من بمان.

بعد از تأیید، مرحله‌به‌مرحله توسعه را انجام بده. هر مرحله باید هدف، فایل‌های ایجاد/تغییر، کد کامل فایل‌ها، Dependencies، Configuration، روش اجرا، روش تست و خطاهای احتمالی را داشته باشد.

اگر فایل قبلی تغییر می‌کند، نسخه کامل فایل جدید را ارائه کن؛ فقط Snippet ناقص نده.

## قانون عدم جعل
هیچ قابلیت Fake را واقعی جلوه نده. اگر Backend/API/Firebase هنوز متصل نیست، صریح اعلام کن و فقط Mock یا Interface موقت بساز. پرداخت واقعی بدون Gateway واقعی فعال فرض نشود.

## Customer Journey
مراجعه به فروشگاه → ثبت سفارش → پیشنهاد نصب اپ → نصب → ثبت‌نام → پیگیری سفارش → انتظار → بازی و سرگرمی → امتیاز → مشاهده قهوه و پیشنهادها → دریافت سفارش → بازگشت → سفارش مجدد → Reward → مشتری وفادار

## دستور فعلی
فعلاً فقط **ARCHITECTURE + MVP + ROADMAP** را ارائه بده و تا زمانی که من تأیید نکرده‌ام وارد تولید کامل کد نشو.
