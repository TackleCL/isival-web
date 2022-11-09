<template>
  <div class="grey lighten-3 | py-9 pt-md-16">
    <v-container class="pt-lg-12">
      <v-row align="center">
        <v-col cols="2" md="1">
          <v-sheet color="accent" height="2" />
        </v-col>
        <v-col>
          <v-breadcrumbs :items="items" class="pa-0 pl-1 text-subtitle-2">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
      <h1 class="text-h3 font-weight-medium">{{ title }}</h1>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["title"],

  data: () => ({
    items: [{ text: "ISIVAL", disabled: false }],
  }),

  mounted() {
    this.items.push({ text: this.title, disabled: true });
  },
};
</script>