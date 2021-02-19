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
      dynamicMenu: [
        {
          id : 'ka',
          navBar: ['მენიუ', 'ოთახის ტიპები', 'სერვისები', 'ჩვენს შესახებ', 'ბლოგი', 'კონტაქტი'],
          roomTypes: {
            roomTypes: 'ოთახის ტიპები',
            price: 'ფასი',
            person: 'პერსონა'
          },
          aboutUs: 'ჩვენს შესახებ',
          blogSection: 'ბლოგი',
          contact: 
          {
              contact: 'კონტაქტი',
              phone: 'ტელეფონი',
              email: 'ფოსტა',
              adress: 'მისამართი'
          }
        },
        {
          id: 'en',
          navBar: ['Home', 'Room types', 'Service', 'About us', 'Blog', 'Contact'],
          roomTypes: {
            roomTypes: 'Room Types',
            price: 'Price',
            person: 'Person'
          },
          aboutUs: 'About us',
          blogSection: 'Blog',
          contact: 
          {
              contact: 'Contact',
              phone: 'Phone',
              email: 'E-mail',
              address: 'Address'
          }
        },
        {
          id: 'ru',
          navBar: ['МЕНЮ', 'ТИПЫ НОМЕРОВ', 'СЕРВИСЫ', 'О НАС', 'БЛОГ', 'КОНТАКТ'],
          roomTypes: {
            roomTypes: 'ТИПЫ НОМЕРОВ',
            price: 'ЦЕНА',
            person: 'ВМЕСТИМОСТЬ'
          },
          aboutUs: 'О НАС',
          blogSection: 'БЛОГ',
          contact: 
          {
              contact: 'контакт',
              phone: 'ТЕЛЕФОН',
              email: 'ПОЧТА',
              address: 'ПОЧТА'
          }
        }
      ]
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
    },
    dynamicNav(state){
      for(const key in state.dynamicMenu){
        if(state.dynamicMenu[key].id === state.globalLanguage){
          return state.dynamicMenu[key]
        }
      }
    }
  }
})
export default store