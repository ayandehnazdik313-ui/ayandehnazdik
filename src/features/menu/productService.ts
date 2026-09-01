import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  type QueryConstraint,
} from 'firebase/firestore'
import { db } from '../../lib/firebase'
import type { Category, Product } from './types'

function mapDocument<T extends object>(snapshot: { id: string; data: () => Record<string, unknown> }): T & { id: string } {
  return { id: snapshot.id, ...(snapshot.data() as T) }
}

export async function listActiveCategories(): Promise<Category[]> {
  const constraints: QueryConstraint[] = [where('isActive', '==', true), orderBy('sortOrder', 'asc')]
  const snapshot = await getDocs(query(collection(db, 'categories'), ...constraints))
  return snapshot.docs.map((item) => mapDocument<Category>(item))
}

export async function listAvailableProducts(categoryId?: string): Promise<Product[]> {
  const constraints: QueryConstraint[] = [where('isAvailable', '==', true), orderBy('sortOrder', 'asc')]

  if (categoryId) {
    constraints.unshift(where('categoryId', '==', categoryId))
  }

  const snapshot = await getDocs(query(collection(db, 'products'), ...constraints))
  return snapshot.docs.map((item) => mapDocument<Product>(item))
}
