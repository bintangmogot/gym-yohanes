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
    path: '/about',
    name: 'About',
    component: () => import('../pages/AboutPage.vue'),
    meta: {
      title: 'About Coach Yohanes - Personal Trainer Canggu | Bali Fitness Coach',
      description: 'Learn more about Coach Yohanes, a professional personal trainer in Canggu, Bali. Discover his expertise and journey in fitness.'
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
    path: '/food',
    name: 'Food',
    component: () => import('../pages/FoodPage.vue'),
    meta: {
      title: 'Healthy Food & Nutrition Plans | Coach Yohanes Bali',
      description: 'Custom nutrition strategies and healthy food guides to complement your fitness journey in Bali with Coach Yohanes.'
    }
  },
  {
    path: '/my-activities',
    name: 'MyActivities',
    component: () => import('../pages/MyActivitiesPage.vue'),
    meta: {
      title: 'My Activities | Coach Yohanes',
      description: 'View your past and upcoming activities with Coach Yohanes in Canggu, Bali.'
    }
  }, 
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/ContactPage.vue'),
    meta: {
      title: 'Contact Coach Yohanes - Personal Trainer Canggu | Bali Fitness Coach',
      description: 'Get in touch with Coach Yohanes for personal training services in Canggu, Bali. Contact us for more information.'
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
  }, 
  {
    path: '/tips/:slug',
    name: 'TipDetail',
    component: () => import('../pages/TipDetailPage.vue'),
    meta: {
      title: 'Fitness Insight | Coach Yohanes',
      description: 'Read the full fitness insight and training tips from Coach Yohanes.'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100, // Offset for sticky navbar
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
