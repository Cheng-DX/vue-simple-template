const Layout = () => import('components/layout/Container.vue')

// permission
const user = 'user'
const handler = 'handler'

// 完整路由结构
const allRoutes = [{
    path: '/login',
    name: '登录',
    meta: {
      notLoad: true,
      notCatche: true,
    },
    component: () => import('views/user/Login.vue')
  },
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      icon: 'el-icon-s-home',
    },
    children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('views/dashboard/Index.vue'),
        meta: {
          icon: 'el-icon-odometer',
        }
    }]
  },
  {
    path: '/profile',
    name: '个人中心',
    component: Layout,
    meta: {
      icon: 'el-icon-user',
    },
    children: [{
        path: 'me',
        name: '我',
        component: () => import('views/user/Me.vue'),
        meta: {
          icon: 'el-icon-medal-1'
        }
      },
      {
        path: 'settings',
        name: '设置',
        component: () => import('views/user/Settings.vue'),
        meta: {
          icon: 'el-icon-setting',
        },
      },
    ],
  },
  {
    path: '/home',
    name: '主页',
    component: Layout,
    redirect: '/home/submenu1/markdown',
    meta: {
      icon: 'el-icon-lightning'
    },
    children: [{
      path: 'submenu1',
      name: '主页子菜单1',
      component: () => import('views/home/submenus/submenu1/index.vue'),
      redirect: '/home/submenu1/markdown',
      meta: {
        icon: 'el-icon-sunset'
      },
      children: [{
        path: 'router',
        name: '路由结构',
        component: () => import('views/home/submenus/submenu1/Router.vue'),
        meta: {
          icon: 'el-icon-heavy-rain'
        }
      }, {
        path: 'filter-data-table',
        name: 'Quiz2',
        component: () => import('views/home/submenus/submenu1/FilterDataTable.vue'),
        meta: {
          icon: 'el-icon-s-data'
        }
      },{
        path: 'markdown',
        name: 'Markdown插件',
        component: () => import('views/home/submenus/submenu1/Markdown.vue'),
        meta: {
          icon: 'el-icon-document'
        }
      }]
    }, {
      path: 'custom-chart',
      name: '自定义图表',
      component: () => import('views/home/submenus/CustomChart.vue'),
      meta: {
        icon: 'el-icon-sunrise',
        permissions: [user]
      }
    }, {
      path: 'submenu3',
      name: '随机address',
      component: () => import('views/home/submenus/Submenu3.vue'),
      meta: {
        icon: 'el-icon-sunrise-1',
        permissions: [handler]
      }
    }]
  },
  {
    path: '*',
    name: '空',
    meta: {
      notLoad: true,
      notCatche: true,
    },
    component: () => import('views/other/NotFound.vue')
  }
]

export default allRoutes;