import { createStore } from 'vuex'
import axios from 'axios'
import urls from '../api/urls.js'

//description
//title
//images array

export default createStore({
  state() {
    return {
      /* Header */
      sliderContent: [],
      visibleSlide: 0,

      /*Room Types */
      roomList: [],

      /*Service */
      serviceList: [],

      /* About */
      about: {},

      /*Blog */
      blogList: [],

      /*Contact */
      contact: {},
    }
  },
  mutations: {
    /*Header */
    setSlide(state, sliders){
      state.sliderContent = sliders
    },
    next(state){
      const slidesLen = state.sliderContent.length;
      if(state.visibleSlide >= slidesLen - 1){
        state.visibleSlide=0;
      }else{
        state.visibleSlide++;
          console.log(slidesLen);
          console.log(state.visibleSlide);
      }
     },
     prev(state) {
      if(state.visibleSlide <= 0){
        state.visibleSlide=state.slidesLen - 1;
      }else{
        state.visibleSlide--;
          console.log(state.slidesLen);
          console.log(state.visibleSlide);
        }
      },

      /*Room Types */
      setRoomList(state, roomList){
        state.roomList = roomList
      },

      /*Services */
      setService(state, services){
        state.serviceList=services
      },

      /*About */
      setAbout(state,about){
        state.about=about;
      },

      /*Blog */
      setBlogs(state, blogs){
        state.blogList=blogs
      },

      /*Contact */
      setContact(state,contact){
        state.contact=contact
      }
},
  actions: {
     /*Header */
    headerSetion({commit}) {
    axios
      .get('https://www.hilltop.ge/api/slider/')
      .then((response) => {
        const sliderContent = response.data
        commit('setSlide', sliderContent)
        // this.sliderContant = response.data
      })
    },
    next({commit}){
      commit('next');
      console.log("actions")
    },
    prev({commit}){
      commit('prev');
    },


    /*Room Types */
    romTypes({commit}) {
      axios.get('https://www.hilltop.ge/api/room-types/')
      .then((response) => {
        // handle success
        const roomList = response.data
        commit('setRoomList', roomList)
      })
    },

    /*Restoraunt Section */
    service({commit}) {
      axios.get('https://www.hilltop.ge/api/service/')
      .then((response) => {
        // handle success
        const services = response.data
        commit('setService', services)
      })
      },
        /*About */
  about({commit}) {
    axios.get('https://www.hilltop.ge/api/about/')
    .then((response) => {
      // handle success
      const about = response.data
      console.log(response.data);
      // console.log(about);
      commit('setAbout', about)
    })
  },
  /*Blog Section */
  getBlog({commit}) {
    axios.get(
      urls.blog
    )
    .then((response) => {
      // handle success
      const blogs = response.data
      console.log(response.data);
      // console.log(about);
      commit('setBlogs', blogs)
    })
  },
  /*Blog DETAIL */
  getBlogDetail({commit}, payload) {
    axios.get(
      urls.blogDetail(payload)
    )
    .then((response) => {
      // handle success
      const contact = response.data
      console.log(payload);
      commit('setContact', contact)
    })
  },

  /*Contact */
  contact({commit}) {
    axios.get('https://www.hilltop.ge/api/contact/')
    .then((response) => {
      // handle success
      const contact = response.data
      // console.log(about);
      commit('setContact', contact)
    })
  },
  
  
},



  getters: {
     /*Header */
    sliderContant(state){
      return state.sliderContent
    },
    visibleSlide(state){
      return state.visibleSlide
    },
    /*room types */
    roomList(state){
      return state.roomList
    },
    /*Services */
    serviceList(state){
      return state.serviceList
    },
    /*About */
    about(state){
      return state.about
    },
    /*Contact */
    contact(state){
      return state.contact
    },
    blogList(state){
      return state.blogList
    }
  }
})
