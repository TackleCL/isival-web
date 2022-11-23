<template>
  <v-app id="app-isival">
    <v-app-header @input="drawer = $event" />
    <v-app-drawer v-model="drawer" @input="drawer = false" />
    <v-main><router-view /></v-main>
    <v-app-loading v-model="loading" />
    <v-app-footer />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import vAppHeader from "./layout/Header.vue";
import vAppFooter from "./layout/Footer.vue";
import vAppDrawer from "./layout/Drawer.vue";
import vAppLoading from "./layout/Loading.vue";

export default {
  name: "App",

  components: { vAppHeader, vAppFooter, vAppDrawer, vAppLoading },
  data: () => ({ drawer: null, loading: true }),
  methods: { ...mapActions("Company", ["readerCompany"]) },

  async mounted() {
    await this.readerCompany();
    this.loading = false;
  },
};
</script>
