import type { UserRole } from '../types/auth'

export type AppRoute =
  | '/'
  | '/menu'
  | '/cart'
  | '/orders'
  | '/loyalty'
  | '/games'
  | '/login'
  | '/staff'
  | '/kitchen'
  | '/admin'

export interface RouteDefinition {
  path: AppRoute
  title: string
  roles?: UserRole[]
}

export const routes: RouteDefinition[] = [
  { path: '/', title: 'خانه' },
  { path: '/menu', title: 'منو' },
  { path: '/cart', title: 'سبد خرید' },
  { path: '/orders', title: 'سفارش‌های من', roles: ['customer', 'staff', 'admin', 'super_admin'] },
  { path: '/loyalty', title: 'باشگاه مشتریان', roles: ['customer'] },
  { path: '/games', title: 'بازی‌ها', roles: ['customer'] },
  { path: '/login', title: 'ورود' },
  { path: '/staff', title: 'کارکنان', roles: ['staff', 'admin', 'super_admin'] },
  { path: '/kitchen', title: 'آشپزخانه', roles: ['kitchen', 'staff', 'admin', 'super_admin'] },
  { path: '/admin', title: 'مدیریت', roles: ['admin', 'super_admin'] },
]

export function canAccessRoute(route: RouteDefinition, role?: UserRole): boolean {
  if (!route.roles) return true
  return role !== undefined && route.roles.includes(role)
}
