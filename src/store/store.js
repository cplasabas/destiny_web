import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state:{
    token:null,
    isUserLogged: false
  },
  mutations:{
    setToken(state,token){
      state.token = token
      if(token){
        state.isUserLogged = true
      }
    }
  },
  actions:{
    setToken({commit},token){
      commit('setToken',token)
    }
  }
})
