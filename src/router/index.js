import { createRouter, createWebHistory } from 'vue-router'
import headerPage from '../components/headerPage.vue'

const routes = [
  {
    path: '/', component: headerPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
