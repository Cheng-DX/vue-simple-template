// Vuex
import Vuex from 'vuex'
import Vue from 'vue'
import router from '../router/index'

// createPersistedState
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    switchType: 'el-fade-in',
    catchedRoutes: [],
    routerTagVisible: true,
    routerTagClosable: true,
    routerTagCloseEvent: 'backToFirst',
    routerTagColor: '#fff',
    notShownWhenEmpty: true,
    breadcrumbVisible: true,
    collapse: false,
  },
  mutations: {
    setSwitchType(state, type) {
      state.switchType = type
    },
    addRoute(state, toRoute) {
      if (toRoute.meta != undefined && toRoute.meta.notCatche != undefined && toRoute.meta.notCatche) {
        // void
      } else if (toRoute.path === '/') {
        // void
      } else {
        let hasRoute = false;
        state.catchedRoutes.forEach(route => {
          if (route.path === toRoute.path) {
            hasRoute = true;
          }
        })
        if (!hasRoute) {
          let item = {
            path: toRoute.path,
            name: toRoute.name,
            icon: toRoute.meta.icon ? toRoute.meta.icon : '',
          }
          state.catchedRoutes.push(item)
        }
      }
    },
    removeRoute(state, route) {
      let index = state.catchedRoutes.indexOf(route)
      let targetRoute = null

      if (route.path === router.currentRoute.path) {
        switch (state.routerTagCloseEvent) {
          case 'backToFirst':
            if (state.catchedRoutes.length > 1) {
              targetRoute = state.catchedRoutes[0]
            } else {
              targetRoute = null
            }
            break;
          case 'backToPrev':
            if (index > 0) {
              targetRoute = state.catchedRoutes[index - 1]
            } else {
              targetRoute = null
            }
            break;
          case 'backToHome':
            targetRoute = '/'
            break;
          default:
            targetRoute = null
            break;
        }
        state.catchedRoutes.splice(index, 1)
        if (targetRoute != null) {
          router.push(targetRoute)
        }
      }else{
        state.catchedRoutes.splice(index, 1)
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
    },
    setRouterTagCloseEvent(state, closeEvent) {
      state.routerTagCloseEvent = closeEvent
    },
    setRouterTagColor(state, color) {
      state.routerTagColor = color
    },
    setNotShownWhenEmpty(state, notShownWhenEmpty) {
      state.notShownWhenEmpty = notShownWhenEmpty
    },
    setBreadcrumbVisible(state, visible) {
      state.breadcrumbVisible = visible
    },
    setCollapse(state, collapse) {
      state.collapse = collapse
    }
  }
});

export default store