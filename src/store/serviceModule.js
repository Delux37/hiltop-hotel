// import axios from 'axios'
// import urls from '../api/urls.js'
import req from './request.js'

const serviceModule = {
    state(){
      return{
        serviceList: [],
        restorauntSlide: 0,
        conferenceSlide: 0,
      }
    },
    mutations: {
        setService(state, services){
          state.serviceList=services.data
        },
        setManualMiddle(state,payload){
          state.restorauntSlide=payload
        },
        setConferenceMiddle(state,payload){
          state.conferenceSlide=payload
        },
    },
    actions: {
      // service({commit}) {
      //   axios.get(
      //     urls.service
      //   )
      //   .then((response) => {
      //     // handle success
      //     const services = response.data
      //     console.log(response.data);
      //     commit('setService', services)
      //   })
      //   },
        async service({commit, rootState}) {
          const data = await req.get('service/', {
              headers : {
                  'Accept-Language' : rootState.globalLanguage
              }
          })
          commit('setService', data)
        },
        manualMiddle({commit}, payload){
          commit('setManualMiddle', payload);
        },
        manualMiddleConference({commit}, payload){
          commit('setConferenceMiddle', payload);
        },
    },
    getters: {
      serviceList(state){
        return state.serviceList
      },
      serviceSlide(state){
        return state.restorauntSlide
      },
      conferenceSlide(state){
        return state.conferenceSlide
      }
    }
};
export default serviceModule