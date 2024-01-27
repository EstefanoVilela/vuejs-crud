import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/employees',
      name: 'empleados',
      children: [
        {
          path: '',
          component: () => import('@/views/employees/List.vue')
        },
        {
          path: 'create',
          component: () => import('@/views/employees/Form.vue')
        },
      ]
    }
  ]
})

export default router