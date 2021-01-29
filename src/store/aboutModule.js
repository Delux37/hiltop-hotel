import axios from 'axios'
import urls from '../api/urls.js'

const aboutModule = {
    state() {
      return {
        about: {},
      }
    },
    mutations: {
      setAbout(state,about){
        state.about=about;
      },
    },
    actions: {
      about({commit}) {
        axios.get(
          urls.about
        )
        .then((response) => {
          // handle success
          const about = response.data
          console.log(response.data);
          // console.log(about);
          commit('setAbout', about)
        })
      },
    },
    getters: {
      about(state){
        return state.about
      },
    }
  };
  export default aboutModule