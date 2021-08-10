import { createRouter, createWebHashHistory } from 'vue-router'
import Landing from '../views/Landing'
import {useStore} from 'vuex'

const store = useStore()

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: {
      layout: "main",
      auth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
    meta: {
      layout: "auth",
      auth: false
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth
  let jwt = localStorage.getItem('jwt-token')
  let uid = localStorage.getItem('localID')

  if (requireAuth && jwt && uid) {
    next()
  } else if (requireAuth && !store.getters['request/isAuthenticated']) {
    next('/login?message=auth')
  } else {
    next()
  }
})

export default router
