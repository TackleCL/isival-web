<template>
  <v-sheet color="cloud" height="216" class="d-flex flex-column justify-end">
    <v-container class="mb-6">
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
  </v-sheet>
</template>

<script>
export default {
  props: ["title", "product"],

  data: () => ({
    items: [{ text: "ISIVAL", disabled: false }],
  }),

  mounted() {
    if (this.product) {
      this.items.push(
        { text: "Servicio Rental", disabled: false, to: "/rental" },
        { text: "Equipo", disabled: true }
      );
    } else {
      this.items.push({ text: this.title, disabled: true });
    }
  },
};
</script>