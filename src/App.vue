<template>
  <v-app id="app-isival">
    <v-app-header />
    <v-main><router-view /></v-main>
    <v-app-loading v-model="loading" />
    <v-app-footer />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import vAppHeader from "./layout/Header.vue";
import vAppFooter from "./layout/Footer.vue";
import vAppLoading from "./layout/Loading.vue";

export default {
  name: "App",

  components: { vAppHeader, vAppFooter, vAppLoading },
  data: () => ({ drawer: null, loading: true }),
  methods: { ...mapActions("Company", ["readerCompany"]) },

  async mounted() {
    await this.readerCompany();
    this.loading = false;
  },
};
</script>
