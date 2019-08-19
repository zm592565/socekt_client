
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
    async GETCHECK_CODE({ commit, state,rootState},{width,height,fontSize=40}) {
      return Functions.requestHttpMethods(API.GETCODE,{width,height,fontSize},'get')
      .then(res=>{
        return Promise.resolve(res.data)
      })
    },

    async TOLOGIN({ commit, state,rootState},{username,password,code}){
      return Functions.requestHttpMethods(API.DOLOGIN,{username,password,code},'post',true)
      .then(res=>{
        if(res.data.state){
          rootState.userinfo=res.data.data;
          rootState.token=res.data.data.token;
        }
        return res.data.state;
      })
    }
  }
}
