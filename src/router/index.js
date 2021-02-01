import { createRouter, createWebHistory } from 'vue-router'
import blogPage from '../pages/blogPage.vue'
import mainPage from '../pages/main-page.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', component: mainPage, name: 'homePage'

    },
    {
      path: '/blog/slug/:slug', component: blogPage, name: 'blogDetail', params: true
    }
  ]
})

export default router
