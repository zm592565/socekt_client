
import router from '@/router'
import { fetchPermission } from '@/api/baseInfo/typeSettings'
import { recursionRouter } from '@/utils/function'
import { asyncRouterMap } from '@/config/router.config.js'

export default {
  namespaced: true,
  state: {
      permissionList: null /** 所有路由 */,
      sidebarMenu: [] /** 导航菜单 */,
      currentMenu: '' /** 当前active导航菜单 */,
      openKeys:''/** 当前展开的菜单 */
  },
  getters: {},
  mutations: {
    SET_PERMISSION(state, routes) {
        state.permissionList = routes
    },
    CLEAR_PERMISSION(state) {
        state.permissionList = null
    },
    SET_MENU(state, menu) {
        state.sidebarMenu = menu
    },
    CLEAR_MENU(state) {
        state.sidebarMenu = []
    },
    SET_CURRENT_MENU(state, currentMenu) {
        state.currentMenu = currentMenu
    },
    SET_OPEN_KEYS(state, openKeys) {
        state.openKeys = openKeys
    }
  },
  actions: {
    async FETCH_PERMISSION({ commit, state }) {
      let permissionList = await fetchPermission().then(res=>{
        if(res.code==0 && res.data){
          return res.data
        }
      })
      //过滤后的路由
      let routes = recursionRouter(permissionList, asyncRouterMap)
      router.options.routes.push(...routes)
      router.addRoutes(router.options.routes)
      commit('SET_PERMISSION', routes)
    }
  }
}
