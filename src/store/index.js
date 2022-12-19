import Vue from 'vue'
import Vuex from 'vuex'

// @import modules
import Cart from './modules/cart';
import Company from './modules/company';
import Product from './modules/product';

import { db } from "@/firebase"
import { collection, addDoc } from "firebase/firestore";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    //// company // Vn0rufgGTFzPmv99qoQ3
    companyId: "Pi00H1qhW1UFXN06QI4I",
  },
  mutations: {
    set_isMobile(state, payload) { state.isMobile = payload }
  },
  actions: {
    // form: parts
    async formParts({ state }, payload) {
      const companyRef = `companies/${state.companyId}/webform`
      await addDoc(collection(db, companyRef), { type: "part", ...payload });
    },

    // form: services
    async formService({ state }, payload) {
      const companyRef = `companies/${state.companyId}/webform`
      await addDoc(collection(db, companyRef), { type: "service", ...payload });
    }
  },
  modules: {
    Company,
    Product,
    Cart
  }
})
