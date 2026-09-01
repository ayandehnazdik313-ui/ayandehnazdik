import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../../lib/firebase'

export async function registerWithEmail(name: string, email: string, password: string) {
  const credential = await createUserWithEmailAndPassword(auth, email.trim(), password)
  await updateProfile(credential.user, { displayName: name.trim() })

  await setDoc(doc(db, 'users', credential.user.uid), {
    role: 'customer',
    name: name.trim(),
    email: credential.user.email,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })

  return credential.user
}

export async function loginWithEmail(email: string, password: string) {
  const credential = await signInWithEmailAndPassword(auth, email.trim(), password)
  return credential.user
}

export async function logout() {
  await signOut(auth)
}
