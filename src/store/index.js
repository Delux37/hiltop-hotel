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
      visibleSlideRooms: 0,

      /*Service */
      serviceList: [],
      restorauntSlide: 0,

      /* About */
      about: {},

      /*Blog */
      blogList: [],

      /*BlogDetail */
      blogDetail: {},

      /*Contact */
      contact: {},
    }
  },
  mutations: {
    /*Header */
    setSlide(state, sliders){
      state.sliderContent = sliders
    },
    manualSelectMiddle(state, payload){
      state.restorauntSlide = payload
    },
    manualSelect(state, payload){
      state.visibleSlide = payload
    },
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

      /*Services */
      setService(state, services){
        state.serviceList=services
      },
      setManualMiddle(state,payload){
        state.restorauntSlide=payload
      },

      /*About */
      setAbout(state,about){
        state.about=about;
      },

      /*Blog */
      setBlogs(state, blogs){
        state.blogList=blogs
      },

      /*Blog Detail */
        setBlogDetail(state, blogDetail){
          state.blogDetail = blogDetail
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
      .get(
        urls.slider
      )
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
    manual({commit}, payload){
      commit('manualSelect', payload);
    },


    /*Room Types */
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

    /*Restoraunt Section */
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
  
        /*About */
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
  /*Blog Section */
  getBlog({commit}) {
    axios.get(
      urls.blog
    )
    .then((response) => {
      // handle success
      const blogs = response.data.results
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
      const blogDetail = response.data
      commit('setBlogDetail', blogDetail)
    })
  },

  /*Contact */
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
    roomSlides(state){
      return state.visibleSlideRooms
    },

    /*Services */
    serviceList(state){
      return state.serviceList
    },
    serviceSlide(state){
      return state.restorauntSlide
    },
    /*About */
    about(state){
      return state.about
    },
    /*Contact */
    contact(state){
      return state.contact
    },

    /* Blogs */
    blogList(state){
      return state.blogList
    },

    /*BlogDetail */
    blogDetail(state){
      return state.blogDetail
    }
  }
})
