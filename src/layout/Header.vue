<template>
  <!-- header: mobile -->
  <v-app-bar app elevate-on-scroll v-if="isMobile" height="72">
    <!-- brand -->
    <img :src="company.logo" alt="Isival" height="36" />
    <v-spacer />

    <!-- cart -->
    <v-btn
      icon
      large
      color="accent"
      class="btn-cart | mr-4"
      :to="{ name: 'Quote' }"
    >
      <v-icon>mdi-text-box-check-outline</v-icon>
      <v-chip small dark color="amber" class="px-2 font-weight-bold">
        {{ cartCount }}
      </v-chip>
    </v-btn>

    <!-- drawer -->
    <v-btn icon large color="primary" @click="$emit('input', true)">
      <v-icon>mdi-backburger</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- header: desktop -->
  <header v-else class="--desktop" :class="isScroll ? 'foo' : null">
    <!-- topbar -->
    <v-system-bar dark height="28" color="primary">
      <v-container class="pl-0">
        <v-row align="center">
          <v-col>
            <!-- tel -->
            <v-btn
              tile
              small
              plain
              class="text-caption text-capitalize"
              :href="`tel:${company.phone}`"
            >
              <v-icon class="mr-2">mdi-cellphone-link</v-icon>
              <span class="font-weight-medium">{{ company.phone }}</span>
            </v-btn>
            <!-- mail -->
            <v-btn
              tile
              small
              plain
              class="text-caption text-lowercase"
              :href="`mailto:${company.email}`"
            >
              <v-icon class="mr-2">mdi-email-outline</v-icon>
              <span class="font-weight-medium">{{ company.email }}</span>
            </v-btn>
          </v-col>
          <v-col class="text-end">
            <!-- admin -->
            <v-btn tile small plain class="text-caption text-capitalize">
              <span class="font-weight-medium"> Ingresar Administrador </span>
            </v-btn>
            <!-- catalogue -->
            <v-btn
              tile
              small
              depressed
              color="light-blue lighten-1"
              class="text-caption"
            >
              <span class="text-capitalize font-weight-medium ml-1">
                Descargar Catálogo
              </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-system-bar>
    <!-- header   -->
    <v-app-bar flat height="109" color="white">
      <v-container>
        <v-row align="center" justify="space-between">
          <!-- brand -->
          <v-col cols="2">
            <router-link :to="{ name: 'Home' }">
              <img :src="company.logo" :alt="company.name" height="66" />
            </router-link>
          </v-col>
          <!-- menu -->
          <v-col class="text-center">
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
          </v-col>
          <!-- cart -->
          <v-col cols="2">
            <v-card flat color="blue darken-4" dark class="rounded-sm" :to="{ name: 'Quote' }">
              <v-list-item dense two-line class="px-2" style="min-height: 55px">
                <v-list-item-avatar class="my-0 rounded-sm">
                  <v-icon class="blue darken-2" dark> mdi-cart-outline </v-icon>
                </v-list-item-avatar>
                <v-list-item-content class="py-0">
                  <v-list-item-title>Cotización</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ cartCount }} Equipos
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-divider class="gray lighten-5" />
  </header>
</template>

<script>
import { mapState } from "vuex";
import menu from "@/mixins/menu";

export default {
  mixins: [menu],

  data: () => ({
    isScroll: false,
  }),

  computed: {
    ...mapState("Company", ["company"]),
    ...mapState("Cart", ["cartCount"]),

    isMobile() {
      this.$store.commit("set_isMobile", this.$vuetify.breakpoint.mobile);
      return this.$vuetify.breakpoint.mobile;
    },
  },

  methods: {
    yScroll() {
      if (window.pageYOffset > 100) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.yScroll);
  },
};
</script>

<style lang="scss" scoped>
// button: cart
.btn-cart {
  .v-chip {
    top: -12px;
    right: -3px;
    position: absolute;
  }
}

// desktop: header
.--desktop {
  top: 0;
  width: 100%;
  z-index: 3;
  position: sticky;
  background-color: #fff;
}

// mobile: scroll
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 6%);
}
</style>