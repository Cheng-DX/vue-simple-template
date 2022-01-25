import Vuex from 'vuex'
import Vue from 'vue'
import plugins from './plugins.js'

import { itemToModule } from './itemToModule.js'

// modules
import globalDisplayStateArray from './modules/globalDisplay.js'
import routerTagStateArray from './modules/routerTag.js'
import githubStateArray from './modules/github.js'
const stateArray = [
  ...globalDisplayStateArray,
  ...routerTagStateArray,
  ...githubStateArray,
]
const stateAndMutations = itemToModule(stateArray)

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: plugins,
  state: stateAndMutations.state,
  mutations: stateAndMutations.mutations,
});

export default store