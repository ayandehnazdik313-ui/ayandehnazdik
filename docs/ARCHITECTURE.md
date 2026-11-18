# Ayandeh Nazdik Smart Web App — Architecture

**Status:** WooCommerce-first commerce architecture approved  
**Date:** 2026-11-18  
**Branch:** `feat/smart-webapp-foundation`

## Architecture decision

WooCommerce is the single source of truth for commerce. WordPress/WooCommerce owns products, variations, prices, stock, coupons, taxes, shipping, cart calculations, canonical commerce orders, payment gateway state and verified payment callbacks.

Firebase remains an application-support layer only: authentication (after explicit identity mapping), saved editable design documents, short-lived kiosk sessions, application preferences and non-commerce operational metadata. Firebase must not become a parallel catalog, price book, inventory ledger, cart or payment ledger.

## System boundaries

### WordPress / WooCommerce
Authoritative for catalog, variations, pricing, stock, coupons, tax/shipping configuration, cart/checkout, canonical customer orders and payment state.

### Secure application backend
Mediates privileged WooCommerce calls; maps Firebase identities to WordPress customer IDs; validates product/variation IDs, quantities, personalization fields, design ownership and current price; creates/updates orders; enforces authorization, idempotency, rate limits and audit logs. WooCommerce consumer secrets and gateway secrets remain server-side.

### Firebase
May support authentication, saved design projects, short-lived kiosk state and app-specific metadata. Do not trust Firebase for prices, stock, payment success or canonical commerce order totals.

### Design files
Keep original uploads, editable project files, customer previews and production exports separate. Private assets require ownership-checked access. Validate MIME, extension, dimensions and size server-side. Do not enable customer uploads until Storage rules and authorization tests pass. Never overwrite official owner-supplied brand assets.

### Café Net
Keep digital-service intake and fulfillment separate from sublimation production. A paid service may be represented by a WooCommerce product/order where appropriate; service-specific fields, attachments and fulfillment states remain in a dedicated workflow linked to the canonical WooCommerce order.

## Identity mapping

Never assume Firebase UID equals WordPress customer ID. Implement an explicit verified mapping record with Firebase UID, WordPress customer ID, verification status and audit timestamps. Prevent account linking from exposing another person's orders. Guest order access must use verified order-access flows.

## Trusted checkout flow

1. Client submits product/variation IDs, quantity, validated personalization and an opaque private design reference — never a trusted price.
2. Backend fetches authoritative product, variation, stock and price data from WooCommerce.
3. Backend validates availability, ownership of design assets and allowed personalization fields.
4. Backend creates or updates the WooCommerce cart/order through supported server-side APIs and hooks.
5. Payment is initiated through the configured WooCommerce gateway.
6. Only verified gateway callbacks or trusted WooCommerce payment state can mark an order paid.
7. Idempotency keys prevent duplicate order creation and callback processing.
8. Application reads canonical commerce status from WooCommerce; production metadata remains a separate workflow.

Never create a parallel Firebase order that can be mistaken for a paid WooCommerce order.

## Security requirements

- Store API credentials only in server-side environment/secret storage.
- Use least-privilege credentials and rotate them.
- Authenticate and authorize every private endpoint.
- Validate ownership of every design and uploaded file.
- Validate uploads server-side; reject executable/unsupported formats.
- Apply CSRF protection for cookie-authenticated operations.
- Rate-limit authentication, uploads, AI generation and checkout.
- Use prepared database operations, sanitize inputs and escape output.
- Keep private files out of public caches and search indexes.
- Isolate kiosk sessions and clear them after timeout.
- Never cache private customer data or payment state in public service-worker caches.

## Delivery phases

1. **Discovery:** inspect repository, Firebase rules/functions, WordPress and WooCommerce environment.
2. **Brand/UI:** exact owner-uploaded logo, character references and product photographs; RTL design system and responsive shell.
3. **WooCommerce:** secure server-side connection, product/variation retrieval, cart, checkout and order synchronization; staging tests first.
4. **Design Studio:** product editors, private uploads, saved designs, previews and production-file validation.
5. **Café Net:** independent service intake and fulfillment, linked to WooCommerce orders when applicable.
6. **Staff/Kiosk:** permission-scoped staff tools, production workflow, isolated kiosk sessions and cleanup.
7. **AI/Automation:** optional consent-based server-side AI and n8n/Telegram integration; manual workflow remains available.
8. **Acceptance:** build, unit, integration, security-rule, upload privacy, payment, mobile, kiosk, accessibility and recovery tests.

A phase is not complete until its acceptance tests pass.

## Verified current limitations

- Existing repository is an early React/TypeScript/Vite + Firebase application.
- No WooCommerce integration was present in the inspected source.
- WordPress/WooCommerce API access and credentials have not been verified.
- Payment gateway configuration has not been verified.
- Official logo, Mahmoud reference photographs and product images must be available as assets before final brand-specific compositions.
- Firebase Storage rules require review and tests before customer uploads are enabled.
- Existing Firestore order rules and trusted order function require hardening before production commerce.

## Acceptance criteria

- WooCommerce alone governs prices, stock, checkout totals and payment state.
- No WooCommerce secret reaches browser code.
- Duplicate checkout requests cannot create duplicate orders.
- Client-submitted prices are ignored.
- No order is marked paid without verified WooCommerce/payment state.
- Design references and uploads are private and ownership-checked.
- Firebase is not a parallel commerce database.
- Café Net and sublimation production workflows remain distinct.
- Official uploaded brand assets are used without alteration.
- Incomplete and externally dependent features are reported honestly.
