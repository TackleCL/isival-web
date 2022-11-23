<template>
  <v-overlay :value="value" color="white" opacity="1" :absolute="absolute">
    <!-- app -->
    <v-card color="transparent" flat v-if="!absolute">
      <v-progress-circular width="3" size="60" />
      <v-progress-circular
        width="3"
        size="60"
        color="primary"
        indeterminate
        style="position: absolute; top: 0; left: 0"
      />
    </v-card>
    <!-- page -->
    <v-card
      tile
      flat
      v-else
      color="transparent"
      style="position: fixed; left: 0"
      :style="`top: ${isMobile ? '72px' : '137px'}`"
      width="100%"
    >
      <v-progress-linear indeterminate color="primary" />
      {{ isMobile }}
    </v-card>
  </v-overlay>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["value", "absolute"],

  computed: {
    ...mapState(["isMobile"]),
  },
};
</script>