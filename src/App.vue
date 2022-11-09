<template>
  <v-app>
    <!-- @import: drawer -->
    <app-drawer v-model="drawer" />

    <!-- @import: header -->
    <app-header @input="drawer = $event" />

    <!-- content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- loading -->
    <v-overlay opacity="1" color="grey lighten-5" :value="overlay">
      <v-card tile flat color="transparent">
        <img src="./assets/logo.svg" alt="" height="60" />
        <v-progress-linear indeterminate color="primary" class="mt-3" />
      </v-card>
    </v-overlay>

    <!-- @import: footer -->
    <app-footer />
  </v-app>
</template>

<script>
import AppDrawer from "./components/layout/AppDrawer.vue";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import { mapActions } from "vuex";

export default {
  name: "App",

  components: { AppDrawer, AppHeader, AppFooter },

  data: () => ({ drawer: null, overlay: false }),

  methods: {
    ...mapActions(["getCompany"]),
  },

  async mounted() {
    this.overlay = true;
    await this.getCompany();
    this.overlay = false;
    // ! delete (only test)
    // setTimeout(() => {
    //   this.overlay = false;
    // }, 2000);
  },
};
</script>
