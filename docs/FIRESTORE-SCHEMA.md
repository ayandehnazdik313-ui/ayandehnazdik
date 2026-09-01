# آینده نزدیک — Firestore Schema v0

This is the initial domain model. It is a design baseline, not a license to over-engineer the first release.

## Collections

### users/{userId}
- role: customer | staff | kitchen | admin | super_admin
- name
- phone
- email
- avatarUrl
- loyaltyLevel
- xp
- coins
- createdAt
- updatedAt
- lastOrderAt

### categories/{categoryId}
- name
- description
- imageUrl
- sortOrder
- isActive
- createdAt
- updatedAt

### products/{productId}
- name
- description
- categoryId
- priceMinor
- discountPriceMinor
- imageUrl
- isAvailable
- isFeatured
- options
- addons
- ingredients
- allergens
- preparationTime
- stock
- sortOrder
- createdAt
- updatedAt

### orders/{orderId}
- orderNumber
- customerId
- tableId
- status
- items[] (snapshot of product name, unit price, quantity, options, addons)
- subtotalMinor
- discountMinor
- totalMinor
- customerNote
- createdAt
- confirmedAt
- preparingAt
- readyAt
- completedAt
- cancelledAt
- idempotencyKey

### tables/{tableId}
- name
- qrToken
- isActive
- currentOrderId
- createdAt
- updatedAt

### loyaltyAccounts/{userId}
- userId
- level
- xp
- coins
- lifetimeXp
- updatedAt

### rewards/{rewardId}
- title
- description
- type
- valueMinor / value
- expiresAt
- isActive
- usageLimit
- createdAt
- updatedAt

### gameSessions/{sessionId}
- userId
- gameId
- startedAt
- completedAt
- score
- reward
- validationStatus

### games/{gameId}
- name
- description
- isActive
- dailyLimit
- xpReward
- coinReward
- sortOrder

### notifications/{notificationId}
- userId
- type
- title
- body
- readAt
- createdAt
- deepLink

### inventory/{productId}
- productId
- stock
- lowStockThreshold
- updatedAt

### analyticsEvents/{eventId}
- userId (nullable when anonymous)
- event
- metadata
- createdAt

### settings/{documentId}
Business configuration such as loyalty thresholds, game limits, reward rules, preparation defaults, and business hours.

## Critical invariants

- Historical order item prices are snapshots.
- Client cannot be trusted for final monetary totals.
- Client cannot grant itself XP, coins, loyalty levels, or rewards.
- Reward redemption must be atomic/idempotent.
- Order creation must be idempotent.
- Customer reads are restricted to their own protected data.
- Staff/kitchen/admin permissions are role-based and enforced by Security Rules and trusted server logic where needed.
