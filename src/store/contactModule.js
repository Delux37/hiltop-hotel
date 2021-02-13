// import axios from 'axios'
// import urls from '../api/urls.js'
import req from './request.js'

const contactModule = {
    state() {
      return {
        contact: {},
      }
    },
    mutations: {
      setContact(state,contact){
        state.contact=contact.data
      }
    },
    actions: {
      // contact({commit}) {
      //   axios.get(
      //     urls.contact
      //   )
      //   .then((response) => {
      //     handle success
      //     const contact = response.data
      //     console.log(about);
      //     commit('setContact', contact)
      //   })
      // },
      async contact({commit, rootState}) {
        const data = await req.get('contact/', {
            headers : {
                'Accept-Language' : rootState.globalLanguage
            }
        })
        commit('setContact', data);
      },
      manual({commit}, payload){
        commit('manualSelect', payload);
      },
    },
    getters: {
      contact(state){
        return state.contact
      },
    }
  }
  export default contactModule