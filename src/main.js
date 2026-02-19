import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { createRouter, createWebHistory } from 'vue-router'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import Styles
import './assets/css/input.css'
import './assets/css/style.css'

import App from './App.vue'

// Setup Router (Simple Home Route)
// const router = createRouter({
//   history: createWebHistory(),
//   routes: [{ path: '/', component: App }]
// })

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')




