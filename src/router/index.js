import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/pages/login/login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/pages/dashboard/dashboard.vue'),
    },
  ],
})

export default router
