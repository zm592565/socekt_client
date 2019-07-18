const state={
  token: ''
}

const mutations={
  setToken(state, token) {
    state.token = token
  },
}

const actions = {
  changeToken ({commit}, token) {
    commit("setToken", token)
  },
  // logoOut ({commit}) {
  //   commit('setToken', ''),
  // 
  // }
};

const getters = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
