export const FIXED_ROUTES: any[] = []
export const SYSTEM_ROUTES = [
  {
    path: '/401',
    name: '401',
    component: () => import('@shared/pages/fixed/401/index.vue'),
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: () => import('@shared/pages/fixed/404/index.vue'),
  },
]
