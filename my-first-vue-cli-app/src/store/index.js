import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId:'',
    token:'',
    email: '',
    seen: []
  
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
    SETEMAIL(state, email) {
      state.email = email;
    },
    SETSEEN(state, threadId) {
      if (!state.seen.includes(threadId)) {
        state.seen.push(threadId)
      }
    }
   
    
  },
  actions: {
    setUserId(context, userId) {
      context.commit('SETUSERID', userId)
    },
    setToken(context, token) {
      context.commit('SETTOKEN', token)
    },
    setEmail(context, email) {
      context.commit('SETEMAIL', email)
    },
    setSeen(context, threadId) {
      context.commit('SETSEEN', threadId)
    }

  },
  modules: {
  }
})
