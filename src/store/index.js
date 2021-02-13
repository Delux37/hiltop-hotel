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
      globalLanguage : 'en',
      isMobileNavBarShown: false,
      direction: '',
    }
  },
  mutations: {
    toggleMobileNavBar(state){
      state.isMobileNavBarShown = !state.isMobileNavBarShown
    },
    setLanguage(state,payload){
      state.globalLanguage=payload;
    }
  },
  actions: {
    toggleMobileNavBar({commit}){
      commit('toggleMobileNavBar')
    },
    testIt(){
      console.log('testIt')
    },
    
    
    setLanguage({commit}, payload){
      let temp;
      if(payload === 'eng'){
        temp = 'en';
        commit('setLanguage', temp);
      }else if(payload === 'rus'){
        temp = 'ru'
        commit('setLanguage', temp);
      }else if(payload === 'geo'){
        temp = 'ka'
        commit('setLanguage', temp);
      }
      return;
    }
  },
  getters: {
    isMobileNavBarShown(state){
      return state.isMobileNavBarShown
    },
    getGlobalLanguage(state){
      return state.globalLanguage
    },
    dynamicLang(state){
      let temp;
      if(state.globalLanguage === 'en'){
        temp = 'ENG';
        return temp
      }else if(state.globalLanguage === 'ru'){
        temp = 'RUS'
        return temp
      }else if(state.globalLanguage === 'ka'){
        temp = 'GEO'
        return temp
      }
    }
  }
})
export default store