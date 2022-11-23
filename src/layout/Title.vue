<template>
  <v-sheet class="page-title" height="200" color="blue lighten-5">
    <v-container class="fill-height">
      <v-row>
        <v-col>
          <div class="d-flex align-center text-overline">
            <v-sheet
              :width="isMobile ? 30 : 90"
              height="3"
              color="amber"
              class="mr-6"
            />
            <router-link to="/" class="text-decoration-none">
              ISIVAL
            </router-link>
            <v-icon small class="mx-3">mdi-chevron-right</v-icon>
            <span class="text--disabled">{{ title }}</span>
          </div>
          <h1 class="text-h4 text-md-h3 font-weight-bold primary--text" v-text="title" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["title"],

  computed: {
    ...mapState(["isMobile"]),
  },
};
</script>