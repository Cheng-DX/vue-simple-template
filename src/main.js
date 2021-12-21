import Vue from 'vue'
import App from './App.vue'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// axios
import axios from 'axios'
Vue.prototype.$axios = axios

// vue-echarts
import VueECharts from 'vue-echarts'
Vue.component('v-chart', VueECharts)

// echarts按需导入
import {
  use
} from 'echarts/core'

import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart,
  LineChart,
  PieChart,
  PictorialBarChart,
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  DataZoomComponent,
  MarkLineComponent,
  MarkPointComponent,
  LegendScrollComponent,
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  DataZoomComponent,
  MarkLineComponent,
  MarkPointComponent,
  LegendScrollComponent,
  PictorialBarChart,
]);

// my tools
import dcharts from './util/dEcharts/dcharts.vue'
Vue.component('d-chart', dcharts)

// the mock
import './util/mock/base.js'

// the router
import router from './router'

// the vuex store
import store from './vuex/store.js'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')