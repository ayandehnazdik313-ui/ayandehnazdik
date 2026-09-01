import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../../lib/firebase'
import type { CreateOrderInput, Order } from './types'

function orderRef(orderId: string) {
  return doc(db, 'orders', orderId)
}

/**
 * Client-side order creation is intentionally limited to writing the customer's
 * submitted snapshot. Production checkout must revalidate prices and totals in
 * trusted server code before accepting payment/fulfilment.
 */
export async function createOrder(input: CreateOrderInput): Promise<string> {
  if (!input.customerId || input.items.length === 0 || !input.idempotencyKey) {
    throw new Error('اطلاعات سفارش ناقص است')
  }

  const idempotencyRef = doc(db, 'orderRequests', input.idempotencyKey)
  const existing = await getDoc(idempotencyRef)

  if (existing.exists()) {
    const existingOrderId = existing.data().orderId as string | undefined
    if (existingOrderId) return existingOrderId
    throw new Error('این درخواست سفارش قبلاً ثبت شده است')
  }

  const orderRefCreated = await addDoc(collection(db, 'orders'), {
    ...input,
    status: 'pending',
    orderNumber: `AN-${Date.now()}`,
    createdAt: serverTimestamp(),
  })

  await setDoc(idempotencyRef, {
    customerId: input.customerId,
    orderId: orderRefCreated.id,
    createdAt: serverTimestamp(),
  })

  return orderRefCreated.id
}

export async function getOrder(orderId: string): Promise<Order | null> {
  const snapshot = await getDoc(orderRef(orderId))
  if (!snapshot.exists()) return null
  return { id: snapshot.id, ...(snapshot.data() as Omit<Order, 'id'>) }
}
