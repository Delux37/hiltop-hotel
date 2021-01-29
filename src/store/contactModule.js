import axios from 'axios'
import urls from '../api/urls.js'

const contactModule = {
    state() {
      return {
        contact: {},
      }
    },
    mutations: {
      setContact(state,contact){
        state.contact=contact
      }
    },
    actions: {
      contact({commit}) {
        axios.get(
          urls.contact
        )
        .then((response) => {
          // handle success
          const contact = response.data
          // console.log(about);
          commit('setContact', contact)
        })
      },
    },
    getters: {
      contact(state){
        return state.contact
      },
    }
  }
  export default contactModule