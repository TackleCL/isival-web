<template>
  <!-- mobile: header -->
  <v-app-bar
    app
    color="white"
    height="72"
    elevate-on-scroll
    v-if="$vuetify.breakpoint.mobile"
  >
    <img src="../../assets/logo.svg" alt="" height="39" />
    <v-spacer />
    <v-btn text :to="{ name: 'Quote' }">
      <span>Cotización</span>
      <v-chip small color="accent" class="px-2 ml-1">
        <span>{{ cartCount }}</span>
      </v-chip>
    </v-btn>
    <v-app-bar-nav-icon @click="$emit('input', true)" class="primary--text" />
  </v-app-bar>

  <!-- desktop -->
  <v-app-bar v-else app elevate-on-scroll height="100" color="white">
    <v-container class="fill-height">
      <v-row align="center">
        <v-col>
          <router-link :to="{ name: 'Home' }">
            <img :src="company.logo" :alt="company.name" height="55" />
          </router-link>
        </v-col>
        <v-col class="text-end">
          <template v-for="(item, index) in items">
            <v-btn
              plain
              :to="item.to"
              :key="index"
              active-class="primary--text"
            >
              {{ item.title }}
            </v-btn>
          </template>
          <v-btn depressed class="ml-4" color="accent" :to="{ name: 'Quote' }">
            <span>Cotización</span>
            <v-chip small color="primary" class="px-2 ml-2">
              <span>{{ cartCount }}</span>
            </v-chip>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
import Menu from "@/mixins/menu";

export default {
  computed: {
    ...mapState("Company", ["company"]),
    ...mapState("Cart", ["cartCount"]),
  },

  mixins: [Menu],
};
</script>

<style lang="scss" scoped>
.app-header {
  top: 0;
  z-index: 3;
  position: sticky;

  .header-wrapper {
    border-top: 1px solid #dbdbdb;
    background-color: white;
  }
}

// mobile: scroll
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 6%);
}

// desktop:
</style>