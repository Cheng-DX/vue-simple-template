import Vue from 'vue'
import App from './App.vue'

// element-ui
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/css/customTheme/darkMode.scss'
import 'element-ui/lib/theme-chalk/display.css'
// import 'element-theme-dark'
Vue.use(ElementUI)

// axios
import axios from 'axios'
axios.defaults.baseURL = '/api';
Vue.prototype.$axios = axios

// vue-echarts
import VueECharts from 'vue-echarts'
Vue.component('v-chart', VueECharts)

// echarts按需导入
import 'util/dEcharts/settings/echarts.js'

// my tools
import dcharts from 'util/dEcharts/dcharts.vue'
Vue.component('d-chart', dcharts)

// mock
import '@/util/mock/base.js'
import '@/util/mock/test.js'

// the router
import router from '@/router'

// the vuex store
import store from '@/vuex/index.js'

// markdown
import VueMarkdown from 'vue-markdown'
Vue.component('vue-markdown', VueMarkdown)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
