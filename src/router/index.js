import { createRouter, createWebHistory } from 'vue-router'

// Import halaman-halaman
// import HomePage from '../pages/HomePage.vue'
// import FoodPage from '../pages/FoodPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue'),
    meta: {
      title: 'Coach Yohanes - Personal Trainer Canggu | Bali Fitness Coach',
      description: 'Transform your body in Canggu, Bali with Coach Yohanes. Professional PT providing personalized workout and nutrition plans.'
    }
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import('../pages/FoodPage.vue'),
    meta: {
      title: 'Healthy Food & Nutrition Plans | Coach Yohanes Bali',
      description: 'Custom nutrition strategies and healthy food guides to complement your fitness journey in Bali with Coach Yohanes.'
    }
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import('../pages/ClientsPage.vue'),
    meta: {
      title: 'Client Transformations & Success Stories | Coach Yohanes',
      description: 'See the real results and testimonials from expats and tourists who trained with Coach Yohanes in Canggu, Bali.'
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../pages/ServicePage.vue'),
    meta: {
      title: 'Personal Training Services in Canggu & Badung | Coach Yohanes',
      description: 'Explore personal training services including body transformation, strength training, and lifestyle coaching in Bali.'
    }
  },
  {
    path: '/tips',
    name: 'Tips',
    component: () => import('../pages/TipsPage.vue'),
    meta: {
      title: 'Bali Fitness Blog & Training Tips | Coach Yohanes',
      description: 'Expert insights on training, nutrition, and staying fit in Bali. Read the latest tips from Coach Yohanes.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
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

// Dynamic SEO Guard
router.afterEach((to) => {
  // Update Title
  const defaultTitle = 'Coach Yohanes - Personal Trainer Bali';
  document.title = to.meta.title || defaultTitle;

  // Update Meta Description
  const description = to.meta.description || 'Professional Personal Trainer in Canggu, Bali.';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
})

export default router
