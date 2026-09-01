export const USER_ROLES = ['customer', 'staff', 'kitchen', 'admin', 'super_admin'] as const

export type UserRole = (typeof USER_ROLES)[number]

export interface AppUser {
  uid: string
  role: UserRole
  name?: string
  phone?: string
  email?: string
  avatarUrl?: string
}
