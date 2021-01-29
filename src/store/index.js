import { createStore } from 'vuex'
import headerModule from './headerModule.js'
import roomTypesModule from './roomTypesModule.js'
import serviceModule from './serviceModule.js'
import blogModule from './blogModule.js'
import aboutModule from './aboutModule.js'
import contactModule from './contactModule.js'

const store = createStore({
  modules: {
    headerModule,
    roomTypesModule,
    serviceModule,
    blogModule,
    aboutModule,
    contactModule
  },
})
export default store