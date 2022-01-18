import router from '@/router'

// 是否缓存路由
const catchedRoutesStateItem = {
  state: {
    catchedRoutes: []
  },
  mutations: {
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
      } else {
        state.catchedRoutes.splice(index, 1)
      }
    },
    clearAllRoutes(state) {
      state.catchedRoutes = []
    },
  }
}

// 路由标签是否可见
const routerTagVisibleStateItem = {
  state: {
    routerTagVisible: false
  },
  mutations: {
    setRouterTagVisible(state, visible) {
      state.routerTagVisible = visible
    }
  }
}

// 路由标签关闭事件
const routerTagClosableStateItem = {
  state: {
    routerTagClosable: true
  },
  mutations: {
    setRouterTagClosable(state, closable) {
      state.routerTagClosable = closable
    },
  }
}

// 路由标签关闭事件
const routerTagCloseEventStateItem = {
  state: {
    routerTagCloseEvent: 'backToFirst'
  },
  mutations: {
    setRouterTagCloseEvent(state, event) {
      state.routerTagCloseEvent = event
    },
  }
}

// 路由标签颜色
const routerTagColorStateItem = {
  state: {
    routerTagColor: '#fff'
  },
  mutations: {
    setRouterTagColor(state, color) {
      state.routerTagColor = color
    },
  }
}

// 空时路由标签是否不显示
const notShownWhenEmptyStateItem = {
  state: {
    notShownWhenEmpty: false
  },
  mutations: {
    setNotShownWhenEmpty(state, notShownWhenEmpty) {
      state.notShownWhenEmpty = notShownWhenEmpty
    },
  }
}

const routerTagStateArray = [
  catchedRoutesStateItem,
  routerTagVisibleStateItem,
  routerTagClosableStateItem,
  routerTagCloseEventStateItem,
  routerTagColorStateItem,
  notShownWhenEmptyStateItem,
]
export default routerTagStateArray