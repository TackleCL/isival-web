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
    //// cart
    cart: [],
    cartCount: 0,
  },
  mutations: {
    /////
    ADD_TO_CART(state, item) {
      let found = state.cart.find(product => product.id == item.id);

      if (found) {
        found.quantity++;
        found.totalPrice = found.quantity * found.price;
      } else {
        state.cart.push(item);
        Vue.set(item, 'quantity', 1);
        Vue.set(item, 'totalPrice', item.price);
      }

      state.cartCount++;
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);

      if (index > -1) {
        let product = state.cart[index];
        state.cartCount -= product.quantity;

        state.cart.splice(index, 1);
      }
    }
  },
  actions: {},
  modules: {
    Company,
    Product,
    Cart
  }
})
