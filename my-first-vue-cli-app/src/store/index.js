import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId:'',
    token:'',
  
  },
  getters: {
  },
  mutations: {
    SETUSERID(state, userId) {
      state.userId = userId;
    },
    SETTOKEN(state, token) {
      state.token = token;
    },
   
    
  },
  actions: {
    setUserId(context, userId) {
      context.commit('SETUSERID', userId)
    },
    setToken(context, token) {
      context.commit('SETTOKEN', token)
    },

  },
  modules: {
  }
})
