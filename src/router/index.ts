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
      name: 'employees',
      children: [
        {
          path: '',
          name: 'employees list',
          component: () => import('@/views/employees/List.vue')
        },
        {
          path: 'create',
          name: 'new employee',
          component: () => import('@/views/employees/Form.vue')
        },
        {
          path: 'edit',
          name: 'editing employee',
          component: () => import('@/views/employees/Form.vue')
        },
      ]
    }
  ]
})

export default router