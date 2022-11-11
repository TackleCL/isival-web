import _ from 'lodash';
import { db } from '@/firebase';
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";


export default {
  namespaced: true,

  state: {},

  mutations: {},

  actions: {
    async readerProduct({ rootState }, sku) {

      // 00 create const
      let item = {};
      const companyRef = `companies/${rootState.companyId}`;

      // 01. get product
      const productRef = `${companyRef}/products`
      const q = query(collection(db, productRef), where("sku", "==", sku));
      const queryProduct = await getDocs(q);
      queryProduct.forEach((doc) => {
        item = { docId: doc.id, ...doc.data() }
      });

      // TODO: only store.categories is empty
      if (rootState.Company.company.categories) {
        console.debug("HOLA")
      } else {
        console.debug("CHAU")
      }

      // 02. get category name
      const categoryRef = doc(db, `${companyRef}/categories`, item.categoryId);
      const categorySnap = await getDoc(categoryRef);
      if (categorySnap.exists()) {
        item.categoryName = categorySnap.data().name
      } else {
        alert("Categoría no encontrada");
      }

      // 03. get related products
      let related = []
      const qRelated = query(collection(db, productRef), where("categoryId", "==", item.categoryId));
      const queryRelated = await getDocs(qRelated);
      queryRelated.forEach((doc) => {
        related.push({ docId: doc.id, ...doc.data() })
      });
      item.related = _.reject(related, { 'sku': sku });

      // end: return item
      return item
    },

    async readerProducts({ rootState }) {

      // 00. create variables
      const items = []
      const categories = []
      const companyRef = `companies/${rootState.companyId}`;

      // 01. get products
      const querySnapshot = await getDocs(collection(db, `${companyRef}/products`));
      querySnapshot.forEach((doc) => {
        items.push({ docId: doc.id, ...doc.data() })
      });

      // 02. get categories
      const querySnapshotCategories = await getDocs(collection(db, `${companyRef}/categories`));
      querySnapshotCategories.forEach((doc) => {
        categories.push({ docId: doc.id, ...doc.data() })
      });

      // 03. create json
      _.forEach(categories, function (value, key) {
        console.debug("0", value.name)
        let newItems = _.filter(items, { 'categoryId': value.docId });
        categories[key]["items"] = newItems
      })

      // return
      return categories
    }
  },

  getters: {}
}