import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import Login from '@/views/pages/login/LoginAuth.vue';
import Main from '@/views/layout/MainLayout.vue';

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
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/pages/dashboard/DashboardMain.vue'),
        },
        {
          path: 'candidates',
          name: 'candidatos',
          component: () => import('@/views/pages/candidates/CandidateIndex.vue'),
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/components/utils/ComingSoon.vue'),
        },
        {
          path: 'change-password',
          name: 'change-password',
          component: () => import('@/components/utils/ComingSoon.vue'),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  const tokenInStorage = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))?.token
    : null;

  if (authRequired && (!auth.token || !tokenInStorage)) {
    auth.logout();
    return next('/login');
  }

  if (to.path === '/login' && auth.token && tokenInStorage) {
    return next('/dashboard');
  }

  next();
});

export default router;
