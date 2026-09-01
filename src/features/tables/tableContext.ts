import type { TableContext } from './types'

const TABLE_CONTEXT_KEY = 'ayandeh-nazdik-table-context'

export function parseTableContext(search: string): TableContext | null {
  const params = new URLSearchParams(search)
  const tableId = params.get('table')?.trim()
  const token = params.get('token')?.trim()

  if (!tableId || !token) return null
  return { tableId, token }
}

export function saveTableContext(context: TableContext): void {
  sessionStorage.setItem(TABLE_CONTEXT_KEY, JSON.stringify(context))
}

export function getTableContext(): TableContext | null {
  try {
    const raw = sessionStorage.getItem(TABLE_CONTEXT_KEY)
    return raw ? (JSON.parse(raw) as TableContext) : null
  } catch {
    return null
  }
}

export function clearTableContext(): void {
  sessionStorage.removeItem(TABLE_CONTEXT_KEY)
}
