// import axios from 'axios'
// import urls from '../api/urls.js'
import req from './request.js'

const aboutModule = {
    state() {
      return {
        about: {},
      }
    },
    mutations: {
      setAbout(state,about){
        state.about=about.data;
      },
    },
    actions: {
      // about({commit}) {
      //   axios.get(
      //     urls.about
      //   )
      //   .then((response) => {
      //     handle success
      //     const about = response.data
      //     console.log(response.data);
      //     console.log(about);
      //     commit('setAbout', about)
      //   })
      // },
      async about({commit, rootState}) {
        const data = await req.get('about/', {
            headers : {
                'Accept-Language' : rootState.globalLanguage
            }
        })
        commit('setAbout', data);
      },
    },
    getters: {
      about(state){
        return state.about
      },
    }
  };
  export default aboutModule