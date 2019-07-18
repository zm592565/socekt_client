
import basicInfo from './modules/basicInfo'
import user from './modules/user'
import permission from './modules/permission'
export default new Vuex.Store({
  state: {
    rootstate:'root'
  },
  modules: {
    basicInfo,
    user,
    permission
  }
})
