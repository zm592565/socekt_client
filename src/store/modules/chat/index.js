import Functions from '@/functions/function'
import API from '@/api/api'
    const state={
      followlist:[],
      historylist:[],
    }

    const mutations={}

    const getters = {}

    const actions={
        GETFOLLOW({state,commit,getters},{userid,pagesize,page}){
          return Functions.requestHttpMethods(API.GETFOLLOW,{userid,pagesize,page},'post')
          .then(res=>{
            if(res.data.state){
              return Promise.resolve(res.data.data)
            }
          })
        },
    }

    export default {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
      }