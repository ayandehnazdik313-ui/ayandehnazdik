import type { CartItem } from '../cart/types'

export const ORDER_STATUSES = ['pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled'] as const
export type OrderStatus = (typeof ORDER_STATUSES)[number]

export interface OrderItemSnapshot extends Omit<CartItem, 'lineId'> {
  productId: string
  name: string
  unitPriceMinor: number
}

export interface CreateOrderInput {
  customerId: string
  tableId?: string
  items: OrderItemSnapshot[]
  subtotalMinor: number
  discountMinor: number
  totalMinor: number
  customerNote?: string
  idempotencyKey: string
}

export interface Order extends CreateOrderInput {
  id: string
  orderNumber: string
  status: OrderStatus
  createdAt: unknown
  confirmedAt?: unknown
  preparingAt?: unknown
  readyAt?: unknown
  completedAt?: unknown
  cancelledAt?: unknown
}
