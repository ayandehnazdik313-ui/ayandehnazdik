# آینده نزدیک — Smart Customer & Order Experience Platform

پلتفرم هوشمند تجربه مشتری، سفارش، مدیریت رستوران/کافه و وفاداری.

## Business

- چاپ سابلیمیشن
- کافی‌نت

## Architecture

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Firebase Cloud Functions where required
- TanStack Query
- TanStack Router
- TanStack Table
- React Hook Form + Zod
- Recharts

## Product Modules

- Customer App
- Digital Menu
- Cart & Checkout
- QR Table Ordering
- Real-time Order Tracking
- Staff Panel
- Kitchen Panel
- Admin Dashboard
- CRM
- Loyalty & Rewards
- Waiting Games
- Notifications
- Analytics

## Source References

The architecture is informed by the following open-source projects:

- DineFlow Client
- TableOrder
- Take-A-Dish
- Shadcn Dashboard
- Shadcn Admin Template

These repositories are references only. Their code and dependencies must not be merged blindly. Licensing and attribution requirements must be respected.

## Development Principles

- One coherent architecture and design system
- Firebase-first backend
- Strict role-based authorization
- Server/trusted validation for prices, rewards and game results
- No secrets in client code
- Mobile-first customer experience
- RTL/Persian-first UI
- Production-oriented security, testing and performance
