import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      streetAddress: '',
      zipCode: '',
      currentCity: '',
      currentCountry: '',
      cityTo: '',
      countryTo: '',
     luggageType: ''
    }
  },
  getters: {
  },
  mutations: {
    setData1(state, payload) {
      state.userData.streetAddress = payload.streetAddress
      state.userData.zipCode = payload.zipCode
      state.userData.currentCity = payload.currentCity
      state.userData.currentCountry = payload.currentCountry
    },
    setData2(state, payload) {
      state.userData.cityTo = payload.city
      state.userData.countryTo = payload.country
    },
    setData3(state, payload) {
      state.userData.luggageType = payload
    }
  },
  actions: {
    addData1(context, payload) {
      context.commit('setData1', payload);
    },
    addData2(context, payload) {
      context.commit('setData2', payload);
    },
    addData3(context, payload) {
      context.commit('setData3', payload)
    }
  },
});
 