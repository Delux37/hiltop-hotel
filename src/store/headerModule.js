// import urls from '../api/urls.js'
// import axios from 'axios'
import req from './request.js'
const headerModule = {
    state() { 
      return {  
        sliderContent: [],
        visibleSlide: 0,
      }
    },
    mutations: {
      setSlide(state, sliders){
        state.sliderContent = sliders.data
      },
      manualSelect(state, payload){
        state.visibleSlide = payload
      },
    },
    actions: {
      // headerSetion({commit}) {
      //   axios
      //     .get(
      //       urls.slider
      //     )
      //     .then((response) => {
      //       const sliderContent = response.data
      //       commit('setSlide', sliderContent)
      //       this.sliderContant = response.data
      //     })
      //   },
        async headerSetion({commit, rootState}) {
          const data = await req.get('slider/', {
              headers : {
                  'Accept-Language' : rootState.globalLanguage
              }
          })
          commit('setSlide', data);
        },
        manual({commit}, payload){
          commit('manualSelect', payload);
        },
    },
    getters: {
      sliderContant(state){
        return state.sliderContent
      },
      visibleSlide(state){
        return state.visibleSlide
      },
    }
  };
  export default headerModule