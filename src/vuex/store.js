// Vuex
import Vuex from 'vuex'
import Vue from 'vue'
import router from '../router/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    switchType: 'el-fade-in',
    catchedRoutes: [],
    routerTagVisible: true,
    routerTagClosable: true,
  },
  mutations: {
    setSwitchType(state, type) {
      state.switchType = type
    },
    addRoute(state, toRoute) {
      if (toRoute.meta != undefined && toRoute.meta.notCatche != undefined && toRoute.meta.notCatche) {
        // void
      } else if( toRoute.path === '/' ){
        // void
      } else {
        let hasRoute = false;
        state.catchedRoutes.forEach(route => {
          if (route.path === toRoute.path) {
            hasRoute = true;
          }
        })
        if (!hasRoute) {
          state.catchedRoutes.push(toRoute)
        }
      }
    },
    removeRoute(state, route) {
      state.catchedRoutes.splice(state.catchedRoutes.indexOf(route), 1)
      if( route.path === router.currentRoute.path ){
        router.push({
          path: state.catchedRoutes[0] ? state.catchedRoutes[0].path : '/'
        }) 
      }
    },
    clearAllRoutes(state) {
      state.catchedRoutes = []
    },
    setRouterTagVisible(state, visible) {
      state.routerTagVisible = visible
    },
    setRouterTagClosable(state, closable) {
      state.routerTagClosable = closable
    }
  }
});

export default store