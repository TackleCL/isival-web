<template>
  <div id="app-footer" class="grey lighten-4">
    <v-container class="py-9 py-16">
      <v-row align="center">
        <v-col cols="12" md="3">
          <img src="../assets/logo-alt.svg" alt="Isival" height="60" />
        </v-col>
        <v-col cols="12" md="3">
          <v-list-item two-line class="px-0">
            <v-list-item-avatar class="rounded-sm">
              <v-icon class="grey lighten-3" color="primary">
                mdi-map-marker-outline
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle class="text-overline">
                Dirección
              </v-list-item-subtitle>
              <v-list-item-title class="text-subtitle-1 font-weight-medium">
                {{ company.address }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" md="3">
          <v-list-item two-line class="px-0">
            <v-list-item-avatar class="rounded-sm">
              <v-icon class="grey lighten-3" color="primary">
                mdi-cellphone
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle class="text-overline">
                Teléfono
              </v-list-item-subtitle>
              <v-list-item-title class="text-subtitle-1 font-weight-medium">
                {{ company.phone }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" md="3">
          <v-list-item two-line class="px-0">
            <v-list-item-avatar class="rounded-sm">
              <v-icon class="grey lighten-3" color="primary">
                mdi-email-outline
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle class="text-overline">
                Email
              </v-list-item-subtitle>
              <v-list-item-title class="text-subtitle-1 font-weight-medium">
                {{ company.email }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    <v-container class="py-4 text-center">
      <span class="text--disabled text-md-caption">
        Copyright © Todos los derechos reservados a ISIVAL.
      </span>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("Company", ["company"]),
  },
};
</script>