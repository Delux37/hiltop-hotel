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
      next(state){
        const slidesLen = state.roomList.length;
        if(state.visibleSlideRooms > slidesLen - 1){
          state.visibleSlideRooms=0;
        }else{
          state.visibleSlideRooms++;
          console.log(state.visibleSlideRooms)
          console.log('from '+ slidesLen)
        }
       },
       prev(state) {
        const slidesLen = state.roomList.length
        if(state.visibleSlideRooms < 0){
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
      next({commit}){
        commit('next');
        console.log("actions")
      },
      prev({commit}){
        commit('prev');
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