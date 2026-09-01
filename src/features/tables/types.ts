export interface RestaurantTable {
  id: string
  number: string
  name?: string
  isActive: boolean
  qrTokenHash?: string
}

export interface TableContext {
  tableId: string
  token: string
}
