import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { FieldValue, getFirestore } from 'firebase-admin/firestore'
import { initializeApp } from 'firebase-admin/app'

initializeApp()
const db = getFirestore()

interface CheckoutItem {
  productId: string
  quantity: number
  selectedOptionChoiceIds?: string[]
  addonIds?: string[]
  note?: string
}

export const createTrustedOrder = onCall(async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'ورود به حساب کاربری الزامی است')

  const data = request.data as { items?: CheckoutItem[]; tableId?: string; customerNote?: string; idempotencyKey?: string }
  if (!Array.isArray(data.items) || data.items.length === 0) {
    throw new HttpsError('invalid-argument', 'سبد خرید خالی است')
  }
  if (!data.idempotencyKey || data.idempotencyKey.length < 16) {
    throw new HttpsError('invalid-argument', 'شناسه یکتای سفارش نامعتبر است')
  }

  const requestRef = db.doc(`orderRequests/${data.idempotencyKey}`)
  const existing = await requestRef.get()
  if (existing.exists) return { orderId: existing.data()?.orderId }

  const productRefs = data.items.map((item) => db.doc(`products/${item.productId}`))
  const productSnapshots = await db.getAll(...productRefs)
  const productById = new Map(productSnapshots.map((snap) => [snap.id, snap]))

  let subtotalMinor = 0
  const orderItems = []

  for (const item of data.items) {
    if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99) {
      throw new HttpsError('invalid-argument', 'تعداد محصول نامعتبر است')
    }

    const product = productById.get(item.productId)
    if (!product?.exists) throw new HttpsError('not-found', 'محصول پیدا نشد')
    const p = product.data()!
    if (p.isAvailable !== true) throw new HttpsError('failed-precondition', 'محصول در دسترس نیست')

    const basePrice = typeof p.discountPriceMinor === 'number' && p.discountPriceMinor < p.priceMinor
      ? p.discountPriceMinor
      : p.priceMinor

    let unitPriceMinor = basePrice
    const selectedOptions = Array.isArray(p.options) ? p.options : []
    const requestedChoices = new Set(item.selectedOptionChoiceIds ?? [])
    const snapshotOptions: unknown[] = []

    for (const option of selectedOptions) {
      const choice = (option.choices ?? []).find((c: { id: string }) => requestedChoices.has(c.id))
      if (choice) {
        unitPriceMinor += Number(choice.priceMinor ?? 0)
        snapshotOptions.push({ optionId: option.id, choiceId: choice.id, name: choice.name, priceMinor: choice.priceMinor })
      }
    }

    const requestedAddons = new Set(item.addonIds ?? [])
    const snapshotAddons: unknown[] = []
    for (const addon of (Array.isArray(p.addons) ? p.addons : [])) {
      if (requestedAddons.has(addon.id)) {
        if (addon.isAvailable === false) throw new HttpsError('failed-precondition', 'افزونه در دسترس نیست')
        unitPriceMinor += Number(addon.priceMinor ?? 0)
        snapshotAddons.push({ id: addon.id, name: addon.name, priceMinor: addon.priceMinor })
      }
    }

    subtotalMinor += unitPriceMinor * item.quantity
    orderItems.push({ productId: item.productId, name: p.name, unitPriceMinor: basePrice, quantity: item.quantity, selectedOptions: snapshotOptions, selectedAddons: snapshotAddons, note: item.note ?? null })
  }

  const orderRef = db.collection('orders').doc()
  const orderNumber = `AN-${Date.now().toString(36).toUpperCase()}`

  await db.runTransaction(async (tx) => {
    const requestCheck = await tx.get(requestRef)
    if (requestCheck.exists) return

    tx.set(orderRef, {
      orderNumber,
      customerId: request.auth!.uid,
      tableId: data.tableId ?? null,
      status: 'pending',
      items: orderItems,
      subtotalMinor,
      discountMinor: 0,
      totalMinor: subtotalMinor,
      customerNote: data.customerNote ?? null,
      idempotencyKey: data.idempotencyKey,
      createdAt: FieldValue.serverTimestamp(),
    })

    tx.create(requestRef, {
      customerId: request.auth!.uid,
      orderId: orderRef.id,
      createdAt: FieldValue.serverTimestamp(),
    })
  })

  return { orderId: orderRef.id, orderNumber }
})
