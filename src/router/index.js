import { createRouter, createWebHistory } from 'vue-router'
import blogPage from '../components/blog-section/blogPage.vue'
import mainPage from '../main-page.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', component: mainPage,

    },
    {
      path: '/blog/slug/:slug', component: blogPage, name: 'blogDetail'
    }
  ]
})

export default router
