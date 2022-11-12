import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      streetAddress: "",
      zipCode: "",
      currentCity: "",
      currentCountry: "",
      cityTo: "",
      countryTo: "",
      luggageType: "",
      description: '',
      meter: '',
      foot: '',
      movingForWork: '',
      date: '',
      name: '',
      email: '',
      phoneNumber: ''
    },
    userData2: {
      plan: '',
      pickUpDate: '',
      deliverDate: ''
    },
  },
  getters: {},
  mutations: {
    setData1(state, payload) {
      state.userData.streetAddress = payload.streetAddress;
      state.userData.zipCode = payload.zipCode;
      state.userData.currentCity = payload.currentCity;
      state.userData.currentCountry = payload.currentCountry;
    },
    setData2(state, payload) {
      state.userData.cityTo = payload.city;
      state.userData.countryTo = payload.country;
    },
    setData3(state, payload) {
      state.userData.luggageType = payload;
    },
    setData4(state, payload) {
      state.userData.description = payload.description;
      state.userData.meter = payload.meter;
      state.userData.foot = payload.foot;
    },
    setData5(state, payload) {
      state.userData.movingForWork = payload;
    },
    setData6(state, payload) {
      state.userData.date = payload;
    },
    setData7(state, payload) {
      state.userData.name = payload;
    },
    setData8(state, payload) {
      state.userData.email = payload.email;
      state.userData.phoneNumber = payload.phoneNumber;
    },
    TsetData5(state, payload) {
      state.userData2.plan = payload
    },
    TsetData6(state, payload) {
      state.userData2.pickUpDate = payload
    },
    TsetData7(state, payload) {
      state.userData2.deliverDate = payload
    },
  },
  actions: {
    addData1(context, payload) {
      context.commit("setData1", payload);
    },
    addData2(context, payload) {
      context.commit("setData2", payload);
    },
    addData3(context, payload) {
      context.commit("setData3", payload);
    },
    addData4(context, payload) {
      context.commit("setData4", payload);
    },
    addData5(context, payload) {
      context.commit("setData5", payload);
    },
    addData6(context, payload) {
      context.commit("setData6", payload);
    },
    addData7(context, payload) {
      context.commit("setData7", payload);
    },
    addData8(context, payload) {
      context.commit("setData8", payload);
    },
    TaddData5(context, payload) {
      context.commit('TsetData5', payload)
    },
    TaddData6(context, payload) {
      context.commit('TsetData6', payload)
    },
    TaddData7(context, payload) {
      context.commit('TsetData7', payload)
    },
  },
});
