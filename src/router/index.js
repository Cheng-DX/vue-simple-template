import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/vuex/index.js'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import allRoutes from './allRoutes.js'

NProgress.configure({
  showSpinner: false
})

Vue.use(VueRouter)

function maintainRouter(permission, route) {
  if (route.meta && route.meta.permissions) {
    return route.meta.permissions.includes(permission) ? true : false
  } else {
    return true
  }
}

function deepFilter(allRoutes, permission) {
  let routes = []
  allRoutes.forEach(route => {
    if (route.children) {
      let children = deepFilter(route.children, permission)
      if (children.length > 0) {
        route.children = children
        routes.push(route)
      }
    } else {
      if (maintainRouter(permission, route)) {
        routes.push(route)
      }
    }
  })
  return routes
}

let permission = 'admin';

let routes = []
if (permission === 'admin') {
  routes = allRoutes;
} else {
  routes = deepFilter(allRoutes, permission);
}

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('addRoute', to);
  NProgress.start()
  if (to.name) {
    document.title = to.name;
  }
  next();
  NProgress.done();
})

export default router