<template>
  <router-link to="/" class="text-decoration-none">
    <v-list-item two-line class="px-0 py-3">
      <v-list-item-avatar v-if="!$vuetify.breakpoint.mobile" class="mt-0">
        <v-icon class="accent" dark> {{ `mdi-${icon}` }} </v-icon>
      </v-list-item-avatar>

      <v-list-item-content class="pl-md-3">
        <v-list-item-title
          v-text="title"
          class="text-h5 font-weight-medium primary--text text-center text-md-left"
        />
        <v-list-item-subtitle
          v-text="text"
          class="text-subtitle-1 text-center text-md-left"
          style="white-space: initial"
        />
      </v-list-item-content>
    </v-list-item>
  </router-link>
</template>

<script>
export default {
  props: ["icon", "title", "text"],
};
</script>
