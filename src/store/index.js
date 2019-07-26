
import Chat from './modules/chat'
import Common from './modules/common'
export default new Vuex.Store({
  state: {
    rootstate:'root'
  },
  modules: {
    Chat,
    Common
  }
})
