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
      appendBlogs(state,blogs){
        state.blogList.push(blogs)
      }
    },
    actions: {
      getBlog({commit}) {
        axios.get(
          urls.blog
        )
        .then((response) => {
          // handle success
          const blogs = response.data
          commit('setBlogs', blogs)
          console.log(blogs);
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
      loadMore({commit},nextPage){
        axios.get(
          nextPage
        )
        .then((response) => {
          const blogs = response.data
          commit('appendBlogs', blogs)
        })
      }
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