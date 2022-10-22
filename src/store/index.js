import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      streetAddress: '',
      zipCode: '',
      city: '',
      country: ''
    }
  },
  getters: {
  },
  mutations: {
    setData1(state, payload) {
      state.userData.streetAddress = payload.streetAddress
      state.userData.zipCode = payload.zipCode
      state.userData.city = payload.city
      state.userData.country = payload.country
    }
  },
  actions: {
    addData1(context, payload) {
      context.commit('setData1', payload);
    }
  },
});
 