export function formatPriceMinor(amountMinor: number, currency = 'تومان'): string {
  if (!Number.isInteger(amountMinor) || amountMinor < 0) {
    throw new Error('Invalid monetary amount')
  }

  return `${new Intl.NumberFormat('fa-IR').format(amountMinor)} ${currency}`
}
