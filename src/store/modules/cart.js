import Vue from 'vue'
import { db } from '@/firebase';
import { collection, addDoc } from "firebase/firestore";

export default {
  namespaced: true,

  state: {
    cart: [],
    cartCount: 0,
  },

  mutations: {
    ADD_TO_CART(state, item) {
      // verify if exist
      let found = state.cart.find(product => product.sku == item.sku);

      if (found) {
        found.quantity++;
      } else {
        state.cart.push(item);
        Vue.set(item, 'quantity', 1);
      }

      state.cartCount++;

    },
    REMOVE_FROM_CART(state, item) {
      let index = state.cart.indexOf(item);

      if (index > -1) {
        let product = state.cart[index];
        state.cartCount -= product.quantity;
        state.cart.splice(index, 1);
      }

    },
    RESET_CART(state) {
      state.cart = []
      state.cartCount = 0
    }
  },

  actions: {
    async createQuote({ rootState, state, commit }, payload) {

      // create variables
      const companyId = rootState.companyId

      await addDoc(collection(db, `companies/${companyId}/webquotes`),
        {
          products: state.cart,
          createdAt: new Date(),
          ...payload
        }
      );

      commit("RESET_CART")
    }
  },

  getters: {}
}