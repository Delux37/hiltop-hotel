import axios from 'axios'
import urls from '../api/urls.js'

const roomTypesModule = {
    state() {
      return {
        roomList: [],
        visibleSlideRooms: 0,
      }
    },
    mutations: {
      next(state, payload){
        const slidesLen = payload;
        if(state.visibleSlideRooms >= slidesLen - 1){
          state.visibleSlideRooms=0;
        }else{
          state.visibleSlideRooms++;
        }
       },
       prev(state, payload) {
        const slidesLen = payload
        if(state.visibleSlideRooms <= 0){
          state.visibleSlideRooms=slidesLen - 1;
        }else{
          state.visibleSlideRooms--;
          }
        },
  
        /*Room Types */
        setRoomList(state, roomList){
          state.roomList = roomList
        },
    },
    actions: {
      next({commit}, payload){
        commit('next', payload);
        console.log("actions")
      },
      prev({commit}, payload){
        commit('prev', payload);
      },
      romTypes({commit}) {
        axios.get(
          urls.roomTypes
        )
        .then((response) => {
          // handle success
          const roomList = response.data
          commit('setRoomList', roomList)
        })
      },
  
    },
    getters: {
      roomList(state){
        return state.roomList
      },
      roomSlides(state){
        return state.visibleSlideRooms
      },
  
    },
  };
  export default roomTypesModule