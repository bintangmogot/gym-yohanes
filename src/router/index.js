import { createRouter, createWebHistory } from 'vue-router'

// Import halaman-halaman
// import HomePage from '../pages/HomePage.vue'
// import FoodPage from '../pages/FoodPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    // Cara ini: Filenya baru akan didownload PAS USER KLIK linknya aja
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import('../pages/FoodPage.vue')
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import('../pages/ClientsPage.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../pages/ServicePage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // ⭐ Ini penting! Scroll ke atas saat pindah halaman
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router
