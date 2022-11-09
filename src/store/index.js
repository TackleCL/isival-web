import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase'
import { doc, getDoc } from "firebase/firestore";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //// navigation
    items: [
      { title: "Inicio", to: { path: "/" } },
      { title: "Nosotros", to: { path: "/nosotros" } },
      { title: "Rental", to: { name: "Rental" } },
    ],
    //// company // Vn0rufgGTFzPmv99qoQ3
    company: {},
    companyId: "lNiuFhfAIKsCuFkasIgy",
    //// cart
    cart: [],
    cartCount: 0,
  },
  mutations: {
    SET_COMPANY(state, payload) { state.company = payload },
    ADD_CART(state, item) {
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
  actions: {
    // @app
    async getCompany({ commit, state }) {
      const docRef = doc(db, "companies", state.companyId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        commit("SET_COMPANY", docSnap.data())
      } else {
        console.debug("No such document!");
      }
    }
  },
  modules: {
  }
})
