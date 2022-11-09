<template>
  <!-- mobile: header -->
  <v-app-bar app flat v-if="$vuetify.breakpoint.mobile">
    <img src="../../assets/logo.svg" alt="" height="30" />
    <v-spacer />
    <v-app-bar-nav-icon @click="$emit('input', true)" class="primary--text" />
  </v-app-bar>

  <!-- desktop -->
  <div class="app-header" v-else>
    <!-- top -->
    <v-system-bar height="40" color="white">
      <v-container>
        <v-row>
          <v-col>
            <span class="text-caption">Janequeo 2180, Concepción</span>
          </v-col>
          <v-col class="text-end | text-caption">
            <span class="contact-info">
              <v-icon class="mr-2">mdi-email-outline</v-icon>
              <span>info@isival.cl</span>
            </span>

            <span class="contact-info | ml-6">
              <v-icon class="mr-2">mdi-phone-outline</v-icon>
              <span>(41) 225 2350</span>
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-system-bar>

    <!-- header -->
    <header class="header-wrapper | py-2">
      <v-container>
        <v-row align="center">
          <!-- brand -->
          <v-col cols="3">
            <img src="../../assets/logo.svg" alt="" height="54" />
          </v-col>

          <!-- menu -->
          <v-col class="text-end">
            <v-btn
              plain
              v-for="(item, index) in items"
              :key="index"
              :to="item.to"
              active-class="primary--text"
            >
              {{ item.title }}
            </v-btn>

            <v-chip color="primary" text-color="white" class="ml-3">
              <v-icon>mdi-cart-outline</v-icon>
              <v-avatar right class="accent font-weight-bold"> 0 </v-avatar>
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
    </header>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["items"]),
  },
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
</style>