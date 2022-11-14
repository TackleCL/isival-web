import Vue from 'vue'
import Vuex from 'vuex'

// @import modules
import Cart from './modules/cart';
import Company from './modules/company';
import Product from './modules/product';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //// company // Vn0rufgGTFzPmv99qoQ3
    companyId: "Vn0rufgGTFzPmv99qoQ3",
  },
  mutations: {},
  actions: {},
  modules: {
    Company,
    Product,
    Cart
  }
})
