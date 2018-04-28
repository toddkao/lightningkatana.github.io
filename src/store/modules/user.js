const state = {
  typed: false
}

const getters = {
  getTyped: state => state.typed
}

const actions = {
  setTyped ({commit}, payload) {
    commit('setTyped', payload)
  },
  clearTyped ({commit}) {
    commit('clearTyped')
  }
}

const mutations = {
  setTyped (state, payload) {
    state.typed = payload
  },
  clearTyped (state) {
    state.typed = false
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
