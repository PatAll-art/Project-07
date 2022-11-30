import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/threads',
    name: 'Threads',
    component: () => import('../views/ForumPage.vue')
  },
  {
    path: '/newpost',
    name: 'newPost',
    component: () => import('../views/NewThread.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
