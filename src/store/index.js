import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase'
import { doc, getDoc } from "firebase/firestore";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      { title: "Inicio", to: { path: "/" } },
      { title: "Nosotros", to: { path: "/nosotros" } },
    ],
    //
    company: {}
  },
  mutations: {
    SET_COMPANY(state, payload) { state.company = payload }
  },
  actions: {
    // @app
    async getCompany({ commit }) {
      const docRef = doc(db, "companies", "oHVcQTF6nFxmHLxf8mBO");
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
