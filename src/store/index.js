import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'
import user from '@/store/modules/user'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    user
  },
  strict: debug,
  plugins: debug ? [createLogger(), createPersistedState()] : [createPersistedState()]
})
