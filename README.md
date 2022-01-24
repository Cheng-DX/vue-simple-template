![](https://visitor-badge.glitch.me/badge?page_id=vue-simple-template-page-id)

<p>
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.14-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.15.6-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/Cheng-DX/vue-simple-template/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/Cheng-DX/vue-simple-template/releases">
    <img src="https://img.shields.io/github/release/Cheng-DX/vue-simple-template.svg" alt="GitHub release">
  </a>
</p>

#### 1.跑起来

```bash
# clone me
git clone https://github.com/Cheng-DX/vue-simple-template.git

# run
cd vue-simple-template
npm install
npm run serve
```

#### 2.技术栈

#### 3.使用说明

##### 3.1 增加一个新页面

- **在适当的位置增加一个vue文件。**虽然路由结构和文件位置无关，但是为了能让目录结构清晰，建议尽量保障目录结构和路由结构相同。

  > 在目录结构中👇

![75x0pt.png](https://s4.ax1x.com/2022/01/23/75x0pt.png)

- **配置路由结构**

  > 新建对应的路由对象，src/router/allRoutes.js

```js
// before
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
        },
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

// 插入的新路由对象
{
    path: 'new-page', // 访问路径
    name: '新页面', // 路由名，我们的项目中这一项会被渲染为标签的title
    component: () => import('views/user/ANewPage.vue'), // 界面
    meta: {
      icon: 'el-icon-s-promotion', // 该路由的图标
    },
}

// after
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
        },
      },
      {
        path: 'settings',
        name: '设置',
        component: () => import('views/user/Settings.vue'),
        meta: {
          icon: 'el-icon-setting',
        },
      },
      {
        path: 'new-page',
        name: '新页面',
        component: () => import('views/user/ANewPage.vue'),
        meta: {
          icon: 'el-icon-s-promotion',
        },
      }
    ],
 },
```

- **效果**。由于侧边栏和面包屑是基于路由结构的，配置好路由结构，侧边栏就会渲染出这个tag。

[![75xB1P.png](https://s4.ax1x.com/2022/01/23/75xB1P.png)](https://imgtu.com/i/75xB1P)

#### 4.License

[MIT](https://github.com/Cheng-DX/vue-simple-template/blob/main/LICENSE)

