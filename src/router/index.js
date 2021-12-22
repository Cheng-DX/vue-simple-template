import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../vuex/store.js'

Vue.use(VueRouter)

const Layout = () => import('../components/Container.vue')

const routes = [{
    path: '/login',
    name: '登录',
    meta: {
      notLoad: true,
      notCatche: true,
    },
    component: () => import('../views/user/Login.vue')
  },
  {
    path: '/',
    name: 'dashbored',
    meta: {
      icon: 'el-icon-light-rain',
    },
    component: Layout,
  },
  {
    path: '/profile',
    name: '个人中心',
    component: Layout,
    meta: {
      notLoad: false,
      icon: 'el-icon-user',
    },
    children: [{
        path: 'me',
        name: '我',
        component: () => import('../views/user/Me.vue'),
        meta:{
          icon: 'el-icon-medal-1'
        }
      },
      {
        path: 'settings',
        name: '设置',
        component: () => import('../views/user/Settings.vue'),
        meta: {
          icon: 'el-icon-setting',
        }
      }
    ],
  },
  {
    path: '/home',
    name: '主页',
    component: Layout,
    redirect: '/home/submenu1/test',
    meta: {
      icon: 'el-icon-lightning'
    },
    children: [{
      path: 'submenu1',
      name: '主页子菜单1',
      component: () => import('../views/home/submenus/submenu1/index.vue'),
      redirect: '/home/submenu1/test',
      meta: {
        icon: 'el-icon-sunset'
      },
      children: [{
        path: 'test',
        name: 'temp',
        component: () => import('../views/home/submenus/submenu1/Test.vue'),
        meta: {
          icon: 'el-icon-heavy-rain'
        }
      }]
    }, {
      path: 'submenu2',
      name: '随机name',
      component: () => import('../views/home/submenus/Submenu2.vue'),
      meta: {
        icon: 'el-icon-sunrise'
      }
    }, {
      path: 'submenu3',
      name: '随机address',
      component: () => import('../views/home/submenus/Submenu3.vue'),
      meta: {
        icon: 'el-icon-sunrise-1'
      }
    }]
  }, {
    path: '*',
    name: '空',
    meta: {
      notLoad: true,
      notCatche: true,
    },
    component: () => import('../views/other/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('addRoute', to);
  if (to.name) {
    document.title = to.name;
  }
  next();
})

export default router