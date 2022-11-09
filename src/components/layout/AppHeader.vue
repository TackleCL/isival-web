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
            <span class="text-caption">
              {{ company.address }} • {{ company.city }}
            </span>
          </v-col>
          <v-col class="text-end | text-caption">
            <span class="contact-info" v-if="company.email">
              <v-icon class="mr-2">mdi-email-outline</v-icon>
              <a :href="`mailto:${company.email}`" class="text-decoration-none">
                {{ company.email }}
              </a>
            </span>

            <span class="contact-info | ml-6" v-if="company.phone">
              <v-icon class="mr-2">mdi-phone-outline</v-icon>
              <a :href="`tel:${company.phone}`" class="text-decoration-none">
                {{ company.phone }}
              </a>
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
            <a href="/">
              <img :src="company.logo" :alt="company.name" height="54" />
            </a>
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
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["items", "company"]),
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