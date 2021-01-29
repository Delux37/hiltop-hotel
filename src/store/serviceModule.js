import axios from 'axios'
import urls from '../api/urls.js'

const serviceModule = {
    state(){
      return{
        serviceList: [],
        restorauntSlide: 0,
      }
    },
    mutations: {
        setService(state, services){
          state.serviceList=services
        },
        setManualMiddle(state,payload){
          state.restorauntSlide=payload
        },
    },
    actions: {
      service({commit}) {
        axios.get(
          urls.service
        )
        .then((response) => {
          // handle success
          const services = response.data
          commit('setService', services)
        })
        },
        manualMiddle({commit}, payload){
          commit('setManualMiddle', payload);
        },
    },
    getters: {
      serviceList(state){
        return state.serviceList
      },
      serviceSlide(state){
        return state.restorauntSlide
      },
    }
};
export default serviceModule