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

export function parseTableContext(search: string): TableContext | null {
  const params = new URLSearchParams(search)
  const tableId = params.get('table')?.trim()
  const token = params.get('token')?.trim()
  if (!tableId || !token) return null
  return { tableId, token }
}
