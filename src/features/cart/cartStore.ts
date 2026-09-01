import type { CartItem } from './types'

const STORAGE_KEY = 'ayandeh-nazdik-cart'

function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CartItem[]) : []
  } catch {
    return []
  }
}

function writeCart(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function getCartItems(): CartItem[] {
  return readCart()
}

export function addToCart(item: CartItem): CartItem[] {
  const items = readCart()
  const index = items.findIndex((existing) => existing.lineId === item.lineId)

  if (index >= 0) {
    items[index] = { ...items[index], quantity: items[index].quantity + item.quantity }
  } else {
    items.push(item)
  }

  writeCart(items)
  return items
}

export function updateCartQuantity(lineId: string, quantity: number): CartItem[] {
  const next = quantity <= 0
    ? readCart().filter((item) => item.lineId !== lineId)
    : readCart().map((item) => item.lineId === lineId ? { ...item, quantity } : item)

  writeCart(next)
  return next
}

export function clearCart(): void {
  localStorage.removeItem(STORAGE_KEY)
}
