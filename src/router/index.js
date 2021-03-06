import Vue from 'vue'
import Router from 'vue-router'
import { publicRoute, protectedRoute } from './config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getAuth} from '../test'
const routes = publicRoute.concat(protectedRoute)
// const routes = publicRoute

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: routes,
})


// router guards
router.beforeEach((to, from, next) => {
  NProgress.start()

  //auth route is authenticated
  // if (to.path !== "/auth/login" && !getAuth()) next({path: "/auth/login"})
  // else next()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
