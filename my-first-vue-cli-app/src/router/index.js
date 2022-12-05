import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomePage.vue')
  },
  {
    path: '/home',
    name: 'homepage',
    component: () => import('../components/HomePage.vue')
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
  },
  {
    path: '/singlethread/:id',
    name: 'singleThread',
    component: ()=> import('../views/SingleThread.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
