import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/overlay1',
      name: 'overlay1',
      component: () => import('../views/Overlay1View.vue')
    },
    {
      path: '/overlaykonfigurator',
      name: 'overlaykonfigurator',
      component: () => import('../views/OverlayKonfigurator.vue')
    }
  ]
})

export default router
