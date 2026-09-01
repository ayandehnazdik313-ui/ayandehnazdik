import { onAuthStateChanged, type User } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../lib/firebase'
import type { AppUser, UserRole } from '../types/auth'

export async function getCurrentAppUser(user: User): Promise<AppUser> {
  const snapshot = await getDoc(doc(db, 'users', user.uid))
  const data = snapshot.data()

  const role = (data?.role ?? 'customer') as UserRole

  return {
    uid: user.uid,
    role,
    name: data?.name,
    phone: data?.phone,
    email: user.email ?? data?.email,
    avatarUrl: data?.avatarUrl,
  }
}

export function subscribeToAuth(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback)
}
