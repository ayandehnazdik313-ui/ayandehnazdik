import { useEffect, useState } from 'react'
import { listActiveCategories, listAvailableProducts } from './productService'
import type { Category, Product } from './types'

export function useFirestoreMenu(categoryId?: string) {
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    Promise.all([listActiveCategories(), listAvailableProducts(categoryId)])
      .then(([nextCategories, nextProducts]) => {
        if (cancelled) return
        setCategories(nextCategories)
        setProducts(nextProducts)
      })
      .catch((reason) => {
        if (!cancelled) setError(reason instanceof Error ? reason : new Error('خطا در دریافت منو'))
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [categoryId])

  return { categories, products, loading, error }
}
