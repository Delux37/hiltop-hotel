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
      const blogs = response.data
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
