<template>
  <v-navigation-drawer
    app
    width="100%"
    :value="value"
    v-if="$vuetify.breakpoint.mobile"
  >
    <!-- header -->
    <v-app-bar flat>
      <img src="../../assets/logo.svg" alt="" height="30" />
      <v-spacer />
      <v-btn color="primary" @click="$emit('input', false)" icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- navigation -->
    <v-list class="py-0" flat>
      <template v-for="(item, index) in items">
        <v-list-item
          :to="item.to"
          :key="index"
          class="py-2 grey--text"
          active-class="primary--text"
          @click="$emit('input')"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="text-h6" />
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="index < items.length - 1" :key="`divider-${index}`" />
      </template>
    </v-list>
    <v-divider></v-divider>

    <!-- cart -->
    <div class="px-4 mt-4">
      <v-btn block depressed x-large color="primary" :to="{ name: 'Quote' }">
        <v-icon class="mr-2">mdi-cart-outline</v-icon>
        Cotización
        <v-avatar right class="accent font-weight-bold ml-3" size="33">
          {{ cartCount }}
        </v-avatar>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
import Menu from "@/mixins/menu";

export default {
  props: ["value"],

  mixins: [Menu],

  computed: {
    ...mapState(["cartCount"]),
  },
};
</script>