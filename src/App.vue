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

    <!-- @import: footer -->
    <app-footer />
  </v-app>
</template>

<script>
import AppDrawer from "./components/layout/AppDrawer.vue";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

export default {
  name: "App",

  components: { AppDrawer, AppHeader, AppFooter },

  data: () => ({ drawer: null }),
};
</script>
