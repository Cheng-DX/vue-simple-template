
// 页面的切换状态
const switchTypeStateItem = {
  state: {
    switchType: 'el-fade-in'
  },
  mutations: {
    setSwitchType(state, type) {
      state.switchType = type
    }
  }
}

// 面包屑的显示状态
const breadcrumbVisibleStateItem = {
  state: {
    breadcrumbVisible: true
  },
  mutations: {
    setBreadcrumbVisible(state, visible) {
      state.breadcrumbVisible = visible
    }
  }
}

// 侧边栏的折叠状态
const collapseStateItem = {
  state: {
    collapse: false
  },
  mutations: {
    setCollapse(state, collapse) {
      state.collapse = collapse
    }
  }
}

// 权限
const permissionStateItem = {
  state: {
    permission: 'admin'
  },
  mutations: {
    setPermission(state, permission) {
      state.permission = permission
    }
  }
}

const themeItem = {
  state: {
    theme: 'light'
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme
    }
  }
}

const globalDisplayStateArray = [
  switchTypeStateItem,
  breadcrumbVisibleStateItem,
  collapseStateItem,
  permissionStateItem,
  themeItem
]

export default globalDisplayStateArray