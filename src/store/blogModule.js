// import axios from 'axios'
import urls from '../api/urls.js'
import req from './request.js'

const blogModule = {
    state() {
      return {
        blogList: [],
        blogDetail: {},
      }
    },
    mutations: {
      setBlogs(state, blogs){
        state.blogList=blogs.data
      },
      setBlogDetail(state, blogDetail){
        state.blogDetail = blogDetail.data
    },
      appendBlogs(state,blogs){
       state.blogList.results.push(...blogs.data.results)
       state.blogList.next=blogs.data.next;
      }
    },
    actions: {
      // getBlog({commit}) {
      //   axios.get(
      //     urls.blog
      //   )
      //   .then((response) => {
      //     // handle success
      //     const blogs = response.data
      //     commit('setBlogs', blogs)
      //     console.log(blogs);
      //   })
      // },
      // getBlogDetail({commit}, payload) {
      //   axios.get(
      //     urls.blogDetail(payload)
      //   )
      //   .then((response) => {
      //     // handle success
      //     const blogDetail = response.data
      //     commit('setBlogDetail', blogDetail)
      //   })
      // },
      // loadMore({commit},nextPage){
      //   axios.get(
      //     nextPage
      //   )
      //   .then((response) => {
      //     const blogs = response.data
      //     commit('appendBlogs', blogs)
      //   })
      // },
      async getBlog({commit, rootState}) {
        const data = await req.get('blog/?page=1', {
            headers : {
                'Accept-Language' : rootState.globalLanguage
            }
        })
        commit('setBlogs', data)
      },
      async getBlogDetail({commit, rootState}, payload) {
        const data = await req.get( urls.blogDetail(payload) , {
            headers : {
                'Accept-Language' : rootState.globalLanguage
            }
        })
        commit('setBlogDetail', data)
      },
      async loadMore({commit, rootState}, nextPage) {
        const data = await req.get(nextPage, {
            headers : {
                'Accept-Language' : rootState.globalLanguage
            }
        })
        commit('appendBlogs', data)
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