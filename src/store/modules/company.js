import { db } from '@/firebase'
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

export default {
  namespaced: true,

  state: {
    company: {}
  },

  mutations: {
    set_company(state, payload) { state.company = payload }
  },

  actions: {
    async readerCompany({ rootState, commit }) {

      // 00. create variables
      let item = {}
      const categories = []
      const companyRef = `companies/${rootState.companyId}`

      // 01. get company
      const docRef = doc(db, "companies", rootState.companyId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) { item = docSnap.data() }

      // 02. get categories
      const querySnapshot = await getDocs(collection(db, `${companyRef}/categories`));
      querySnapshot.forEach((doc) => { categories.push({ docId: doc.id, ...doc.data() }) });
      item.categories = categories

      commit("set_company", item)
    }
  },

  getters: {}
}