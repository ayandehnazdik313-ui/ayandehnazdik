# آینده نزدیک — Architecture

## Goal

Build one coherent Persian-first customer and restaurant operations platform. The GitHub reference projects are architectural/UI references only; they are not merged wholesale.

## Application surfaces

- Customer: Home, Menu, Product, Cart, Checkout, Orders, QR Table Ordering, Loyalty, Rewards, Games, Notifications, Profile
- Staff: operational order management and customer-safe order context
- Kitchen: NEW / PREPARING / READY workflow
- Admin: Dashboard, Orders, Products, Categories, Customers, Inventory, Tables, Loyalty, Rewards, Games, Notifications, Analytics, Staff, Settings

## Technology direction

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- TanStack Router
- TanStack Query
- TanStack Table
- React Hook Form + Zod
- Recharts
- Firebase Authentication
- Cloud Firestore
- Firebase Storage when needed
- Cloud Functions for trusted/server-side operations

## Architecture rules

1. Firebase-first. Do not add MySQL, Redis, Express, Cloudinary, or another backend without a demonstrated requirement.
2. One routing system and one UI component system.
3. Feature-based organization; keep UI, domain logic, and data access separated.
4. Client state is not a source of truth for authorization, prices, loyalty, coins, XP, or rewards.
5. Critical monetary and reward operations require trusted validation.
6. Orders are idempotent and historical item prices are snapshotted.
7. Real-time listeners are limited to operationally valuable data such as active orders.
8. Customer experience is mobile-first and RTL/Persian-first.
9. Admin is information-dense, searchable, filterable, and desktop-first.
10. Security Rules and trusted server logic enforce permissions; frontend guards are UX only.

## Reference mapping

- DineFlow Client: Customer/order UX patterns
- TableOrder: QR/table ordering and real-time patterns
- Take-A-Dish: staff/kitchen/table operational patterns
- Shadcn Dashboard: dashboard/component reference
- Shadcn Admin Template: primary admin architecture reference

## Core flow

DISCOVER → ORDER → TRACK → WAIT → PLAY → EARN → REDEEM → RETURN

The waiting/game/loyalty layer is a differentiating feature, but it must never destabilize the core ordering workflow.
