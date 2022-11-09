import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      { title: "Inicio", to: { path: "/" } },
      { title: "Nosotros", to: { path: "/nosotros" } },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
