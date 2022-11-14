<template>
  <v-overlay :value="value" absolute color="white" opacity="1">
    <v-card
      tile
      flat
      color="transparent"
      class="align-center flex-column d-flex"
    >
      <img src="@/assets/logo-alt.svg" alt="Isival" height="30" />
      <v-progress-linear indeterminate color="accent" height="3" class="mt-3" />
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  props: ["value"],
};
</script>