import { doc, onSnapshot, type Unsubscribe } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import type { Order } from './types'

export function subscribeToOrder(
  orderId: string,
  onChange: (order: Order | null) => void,
  onError?: (error: Error) => void,
): Unsubscribe {
  return onSnapshot(
    doc(db, 'orders', orderId),
    (snapshot) => {
      if (!snapshot.exists()) {
        onChange(null)
        return
      }
      onChange({ id: snapshot.id, ...(snapshot.data() as Omit<Order, 'id'>) })
    },
    (error) => onError?.(error),
  )
}
