import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/pages/login/login.vue'
import Main from '@/views/layout/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      component: Main,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/pages/dashboard/dashboard.vue'),
        },
      ],
    },
  ],
})

export default router
