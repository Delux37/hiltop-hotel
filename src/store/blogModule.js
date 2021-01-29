import axios from 'axios'
import urls from '../api/urls.js'

const blogModule = {
    state() {
      return {
        blogList: [],
        blogDetail: {},
      }
    },
    mutations: {
      setBlogs(state, blogs){
        state.blogList=blogs
      },
      setBlogDetail(state, blogDetail){
        state.blogDetail = blogDetail
    },
    },
    actions: {
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
    },
    getters: {
      blogList(state){
        return state.blogList
      },
    
      /*BlogDetail */
      blogDetail(state){
        return state.blogDetail
      }
    }
    };

export default blogModule