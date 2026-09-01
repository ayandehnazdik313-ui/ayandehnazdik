# Google AI Studio Handoff

## Objective

Use Google AI Studio/Gemini as an implementation assistant for the existing GitHub project. The generated application must preserve the existing architecture and continue development from the repository instead of creating an unrelated demo.

## Current foundation

- React + TypeScript + Vite
- Firebase client boundary
- Firestore domain schema
- Firestore role-based rules
- Menu/Product domain types and service
- Cart domain and price calculations
- Order lifecycle and idempotency boundary
- Persian RTL application shell

## Required next implementation order

1. Install dependencies from package.json and verify the build.
2. Implement Tailwind CSS and shadcn/ui without replacing the existing architecture.
3. Implement application routing.
4. Implement Firebase Authentication with phone/email options as configured by the project owner.
5. Implement role-aware navigation and protected routes.
6. Implement customer menu using real Firestore services, with loading, empty, error and unavailable states.
7. Implement product details, options, add-ons and cart UI.
8. Implement trusted checkout using Firebase Cloud Functions. Re-read product prices from Firestore, validate availability, calculate totals server-side, enforce idempotency, then create the order.
9. Implement QR table context and order tracking with Firestore real-time listeners.
10. Implement staff and kitchen operational screens.
11. Implement admin dashboard.
12. Only after the core ordering flow is stable, implement loyalty, rewards and waiting games.

## Non-negotiable requirements

- Do not use fake data in production flows.
- Do not put service-account keys or private secrets in the frontend.
- Never trust client-provided price, discount, reward, XP, coin or permission values.
- Preserve historical product names/prices inside orders.
- Use idempotency for checkout/order creation.
- Keep Persian RTL as the primary customer UI direction.
- Use accessible components and responsive layouts.
- Do not rewrite or delete existing domain documentation without reason.
- Run the production build after meaningful implementation milestones.

## APK reality check

This repository is currently a web application foundation. A web React/Vite project does not become an Android APK merely by generating more React code. For an APK deliverable, package the stable web app with a supported Android container such as Capacitor, configure Android Studio/Gradle, test the native build, and produce a signed release APK/AAB as appropriate.

Google AI Studio should therefore first complete and validate the web application, then add the Android packaging layer. Do not pretend an APK exists until the Android project builds successfully.

## Final acceptance criteria

- npm install succeeds
- npm run build succeeds
- Firebase configuration is supplied through environment variables
- Authentication works
- customer can browse real menu data
- customer can build a cart
- checkout is server-validated and idempotent
- order is persisted and trackable
- staff/kitchen can process the order according to role
- admin access is protected
- Android wrapper builds successfully
- release APK/AAB is generated only after a successful native build
