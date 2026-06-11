import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

// should use createWebHashHistory instead of createWebHistory
// https://electron-vite.org/guide/troubleshooting#vue-router-or-react-router-dom-works-in-development-but-not-production
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
