import type { ProductAddon, ProductOption } from '../menu/types'

export interface SelectedProductOption {
  option: ProductOption
  choice: ProductOption['choices'][number]
}

export interface CartItem {
  lineId: string
  productId: string
  name: string
  unitPriceMinor: number
  quantity: number
  selectedOptions: SelectedProductOption[]
  selectedAddons: ProductAddon[]
  note?: string
}

export interface CartState {
  items: CartItem[]
}

export function calculateLineTotalMinor(item: CartItem): number {
  const optionsTotal = item.selectedOptions.reduce((sum, itemOption) => sum + itemOption.choice.priceMinor, 0)
  const addonsTotal = item.selectedAddons.reduce((sum, addon) => sum + addon.priceMinor, 0)
  return (item.unitPriceMinor + optionsTotal + addonsTotal) * item.quantity
}

export function calculateCartSubtotalMinor(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + calculateLineTotalMinor(item), 0)
}
