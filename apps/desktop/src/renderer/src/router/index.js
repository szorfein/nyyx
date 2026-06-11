import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
]

// should use createWebHashHistory instead of createWebHistory
// https://electron-vite.org/guide/troubleshooting#vue-router-or-react-router-dom-works-in-development-but-not-production
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
