import Vuex from 'vuex'
import Vue from 'vue'
import plugins from './plugins.js'

import { itemToModule } from './itemToModule.js'

// modules
import globalDisplayStateArray from './modules/globalDisplay.js'
import routerTagStateArray from './modules/routerTag.js'

const stateArray = [
  ...globalDisplayStateArray,
  ...routerTagStateArray
]
const stateAndMutations = itemToModule(stateArray)

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: plugins,
  // 不使用modules
  state: stateAndMutations.state,
  mutations: stateAndMutations.mutations,
});

export default store