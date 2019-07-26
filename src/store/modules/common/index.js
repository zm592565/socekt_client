
import API from '@/api/api'
import Functions from '@/functions/function'
export default {
  namespaced: true,
  state: {
      permissionList: null /** 所有路由 */,
  },
  getters: {},
  mutations: {
    SET_PERMISSION(state, routes) {
        state.permissionList = routes
    },
  },
  actions: {
    async GETCHECK_CODE({ commit, state }) {
      return Functions.requestHttpMethods(API.GETCODE)
    }
  }
}
