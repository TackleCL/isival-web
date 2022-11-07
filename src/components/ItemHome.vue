<template>
  <v-row align="center">
    <v-col cols="2">
      <span class="text-button number pb-6" v-text="item" />
    </v-col>
    <v-col>
      <v-icon class="text-h3" color="info">{{ icon }}</v-icon>
      <h4 class="text-h5 font-weight-medium black--text" v-text="title" />
      <p style="min-height: 88px" v-text="text" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["item", "icon", "title", "text"],
};
</script>

<style lang="scss" scoped>
.number {
  padding-left: 3px;
  border-left: 1px solid #dbdbdb;
}
</style>