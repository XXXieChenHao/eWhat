import Vue from 'vue'
import vuex from 'vuex'
import getters from './getters'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default

  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters,
  plugins: [createPersistedState({ storage: window.sessionStorage })],
})
export default store
