// import axios from 'axios'
// import urls from '../api/urls.js'
import req from './request'

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
          console.log('Clicked Next' + slidesLen + state.visibleSlideRooms)
        }
       },
       prev(state, payload) {
        const slidesLen = payload
        if(state.visibleSlideRooms <= 0){
          state.visibleSlideRooms=slidesLen - 1;
        }else{
          state.visibleSlideRooms--;
          console.log('Clicked Prev' + slidesLen + state.visibleSlideRooms)
          }
        },
  
        /*Room Types */
        setRoomList(state, roomList){
          // console.log(roomList);
          state.roomList = roomList.data
        },
    },
    actions: {
      next({commit}, payload){
        commit('next', payload);
        console.log("actions" + payload)
      },
      prev({commit}, payload){
        commit('prev', payload);
      },
      // romTypes({commit}) {
      //   axios.get(
      //     urls.roomTypes
      //   )
      //   .then((response) => {
      //     // handle success
      //     const roomList = response.data
      //     commit('setRoomList', roomList)
      //   })
      // },
      async romTypes({commit, rootState}) {
      const data = await req.get('room-types/', {
          headers : {
              'Accept-Language' : rootState.globalLanguage
          }
      })
      commit('setRoomList', data);
      }
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