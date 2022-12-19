<template>
  <div class="Quote">
    <!-- header -->
    <v-app-title title="Cotización" />

    <v-container class="mt-3 mt-md-12">
      <v-alert
        :type="alert.type"
        v-if="alert.value"
        v-text="alert.text"
        class="mb-md-9"
      />

      <v-row justify="space-between">
        <!-- items -->
        <v-col cols="12" md="6">
          <h3 class="text-h5 font-weight-medium concrete--text mb-3">
            Equipos:
          </h3>
          <v-card outlined :disabled="loading">
            <template v-for="(item, index) in cart">
              <v-list-item two-line :key="item.sku">
                <!-- image -->
                <v-list-item-avatar
                  size="80"
                  color="cloud"
                  class="rounded-sm justify-center"
                >
                  <v-img v-if="item.image" :src="item.image" />
                  <v-icon v-else color="grey">mdi-image-off-outline</v-icon>
                </v-list-item-avatar>
                <!-- info -->
                <v-list-item-content>
                  <v-list-item-title v-text="item.name" class="text-h6" />
                  <v-list-item-subtitle
                    class="text-subtitle-1 font-weight-medium"
                  >
                    Cantidad:
                    <span class="primary--text">{{ item.quantity }}</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <!-- delete -->
                <v-list-item-action>
                  <v-btn icon @click.prevent="deleteItem(item)">
                    <v-icon color="silver"> mdi-trash-can-outline </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-divider v-if="index < cart.length - 1" :key="index" />
            </template>

            <!-- empty -->
            <v-card-text
              v-if="cart.length < 1"
              class="text-subtitle-1 font-weight-medium"
            >
              0 Equipos en tu cotización.
              <router-link to="/rental" class="text-decoration-none">
                Agregar Aquí
              </router-link>
            </v-card-text>
          </v-card>
        </v-col>
        <!-- form -->
        <v-col cols="12" md="5">
          <v-form ref="form" @submit.prevent="onCheckout" :disabled="loading">
            <v-row>
              <v-col cols="12">
                <!-- contact -->
                <h4 class="text-subtitle-1 font-weight-medium mb-4">
                  Datos de Contacto:
                </h4>
                <v-text-field
                  outlined
                  hide-details
                  label="Nombre *"
                  :rules="required"
                  v-model="quote.name"
                />
              </v-col>
              <v-col cols="12" md="7">
                <v-text-field
                  outlined
                  hide-details
                  label="Email *"
                  type="email"
                  :rules="required"
                  v-model="quote.email"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  outlined
                  hide-details
                  label="Teléfono *"
                  type="tel"
                  prefix="+56"
                  v-model="quote.phone"
                  :rules="required"
                />
              </v-col>
              <!-- company -->
              <v-col cols="12" class="pb-0">
                <h4 class="text-subtitle-1 font-weight-medium">
                  Datos de la Empresa:
                </h4>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  hide-details
                  :rules="required"
                  label="Nombre Empresa *"
                  v-model="quote.company"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  hide-details
                  :rules="required"
                  label="Rut Empresa *"
                  v-model="quote.companyRut"
                />
              </v-col>
              <v-col cols="12">
                <v-select
                  :items="regiones"
                  label="Región"
                  outlined
                  hide-details
                  item-text="region"
                  item-value="region"
                  v-model="quote.region"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  hide-details
                  label="Comentarios adicionales"
                  v-model="quote.comment"
                />
              </v-col>
              <v-col cols="12">
                <v-btn
                  block
                  depressed
                  x-large
                  color="primary"
                  type="submit"
                  :loading="loading"
                  :disabled="loading || cart.length < 1"
                >
                  Enviar Cotización
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import forms from "@/mixins/forms";
import { mapActions, mapState } from "vuex";
import vAppTitle from "../layout/Title.vue";

export default {
  components: { vAppTitle },

  mixins: [forms],

  data: () => ({
    quote: {},
    alert: { value: false },
    loading: false,
  }),

  computed: {
    ...mapState("Cart", ["cart", "cartCount"]),
  },

  methods: {
    ...mapActions("Cart", ["createQuote"]),

    deleteItem(item) {
      if (confirm("Seguro que deseas eliminar este equipo de tu cotización")) {
        this.$store.commit("Cart/REMOVE_FROM_CART", item);
      }
    },

    async onCheckout() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        await this.createQuote(this.quote)
          .then(() => {
            this.alert = {
              value: true,
              text: "Hemos generado su cotización. Responderemos a la brevedad",
              type: "success",
            };
            this.$refs.form.reset();
          })
          .catch(() => {
            this.alert = {
              value: true,
              text: "Tuvimos un problema para generar su cotización. Intente Nuevamente",
              type: "warning",
            };
          });
        window.scrollTo(0, 0);
        this.loading = false;
      }
    },
  },
};
</script>