
import Chat from './modules/chat'
import Common from './modules/common'
export default new Vuex.Store({
  state: {
    userinfo:null,
    token:null
  },
  modules: {
    Chat,
    Common
  }
})
