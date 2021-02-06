import { createStore } from 'vuex'
import headerModule from './headerModule.js'
import roomTypesModule from './roomTypesModule.js'
import serviceModule from './serviceModule.js'
import blogModule from './blogModule.js'
import aboutModule from './aboutModule.js'
import contactModule from './contactModule.js'

const store = createStore({
  modules: {
    headerModule,
    roomTypesModule,
    serviceModule,
    blogModule,
    aboutModule,
    contactModule,
  },
  state(){
    return {
      isMobileNavBarShown: false,
      direction: '',
    }
  },
  mutations: {
    toggleMobileNavBar(state){
      state.isMobileNavBarShown = !state.isMobileNavBarShown
    }
  },
  actions: {
    toggleMobileNavBar({commit}){
      commit('toggleMobileNavBar')
    },
    testIt(){
      console.log('testIt')
    }
  },
  getters: {
    isMobileNavBarShown(state){
      return state.isMobileNavBarShown
    }
  }
})
export default store