import type { CreateOrderInput } from './types'

export function validateOrderInput(input: CreateOrderInput): void {
  if (!input.customerId.trim()) throw new Error('شناسه مشتری الزامی است')
  if (!input.idempotencyKey.trim()) throw new Error('شناسه یکتای سفارش الزامی است')
  if (input.items.length === 0) throw new Error('سبد خرید خالی است')

  for (const item of input.items) {
    if (!item.productId || !item.name.trim()) throw new Error('اطلاعات یکی از محصولات نامعتبر است')
    if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99) {
      throw new Error('تعداد محصول نامعتبر است')
    }
    if (!Number.isInteger(item.unitPriceMinor) || item.unitPriceMinor < 0) {
      throw new Error('قیمت محصول نامعتبر است')
    }
  }
}
