<template>
  <v-sheet color="cloud" height="210">
    <v-container class="fill-height align-end pb-8">
      <v-row>
        <v-col>
          <!-- breadcrumbs -->
          <div class="d-flex align-center pb-md-2">
            <!-- bar -->
            <v-sheet
              color="accent"
              width="90"
              height="2"
              class="mr-6"
              v-if="!$vuetify.breakpoint.mobile"
            />
            <!-- items -->
            <v-breadcrumbs class="px-0 pb-2 py-md-0" :items="items">
              <template v-slot:item="{ item }">
                <v-breadcrumbs-item>
                  <span class="font-weight-medium" v-if="!item.to">
                    {{ item.text }}
                  </span>
                  <router-link
                    v-else
                    :to="item.to"
                    class="
                      font-weight-medium
                      text-decoration-none
                      primary--text
                    "
                  >
                    {{ item.text }}
                  </router-link>
                </v-breadcrumbs-item>
              </template>
            </v-breadcrumbs>
          </div>
          <!-- title -->
          <h1 class="text-h3 text-md-h2 font-weight-medium">ISIVAL Rental</h1>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: ["category"],

  data: () => ({
    items: [
      { text: "ISIVAL" },
      { text: "Servicio Rental", to: { name: "Rental" } },
    ],
  }),

  watch: {
    category(v) {
      if (!v) return;
      this.items.push({ text: v });
    },
  },
};
</script>