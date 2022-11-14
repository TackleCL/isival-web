<template>
  <div class="product">
    <page-header title="Descripción" :product="true" />

    <!-- content -->
    <v-container class="mt-3 mt-md-15 product-container">
      <!-- 01. detail -->
      <v-row>
        <!-- image -->
        <v-col cols="12" md="6">
          <v-card tile outlined>
            <v-card-text v-if="!loading">
              <v-img
                contain
                v-if="item.image"
                :src="item.image"
                alt="ISIVAL"
                :height="$vuetify.breakpoint.mobile ? 250 : 390"
              />
              <!-- empty -->
              <v-sheet
                v-else
                color="cloud"
                class="d-flex justify-center align-center"
                :height="$vuetify.breakpoint.mobile ? 250 : 390"
              >
                <v-icon large color="grey lighten-1"
                  >mdi-image-off-outline</v-icon
                >
              </v-sheet>
              <!-- loading -->
            </v-card-text>
            <!-- loading -->
            <v-card-text v-else>
              <v-skeleton-loader
                tile
                type="image"
                :height="$vuetify.breakpoint.mobile ? 125 : 195"
              />
              <v-skeleton-loader
                tile
                type="image"
                :height="$vuetify.breakpoint.mobile ? 125 : 195"
              />
            </v-card-text>
          </v-card>
        </v-col>

        <!-- data -->
        <v-col cols="12" md="6" class="pl-md-9">
          <!-- category -->
          <v-skeleton-loader
            type="paragraph, text"
            v-if="loading"
            height="150"
          />
          <h5 class="text-h5 font-weight-medium" v-if="!loading">
            <span class="font-weight-bold accent--text mr-3">/</span>
            <span class="concrete--text">{{ item.categoryName }}</span>
          </h5>
          <h1
            class="text-h3 font-weight-medium mb-9 mb-md-15 mt-md-3"
            v-if="!loading"
          >
            {{ item.name }}
          </h1>

          <!-- addCart -->
          <v-skeleton-loader type="button" v-if="loading" />
          <v-btn
            color="primary"
            x-large
            depressed
            class="px-16"
            @click="addToCart(item)"
            v-if="!$vuetify.breakpoint.mobile && !loading"
          >
            Cotizar Equipo
          </v-btn>
        </v-col>
      </v-row>

      <!-- 02. tabs -->
      <v-skeleton-loader
        type="list-item-two-line, image"
        class="mt-md-16"
        v-if="loading"
      />
      <v-tabs
        v-else
        centered
        v-model="tab"
        class="mt-md-16"
        :fixed-tabs="$vuetify.breakpoint.mobile"
      >
        <v-tab class="text-capitalize text-subtitle-1 font-weight-medium">
          Especificaciones
        </v-tab>
        <v-tab class="text-capitalize text-subtitle-1 font-weight-medium">
          Archivos
        </v-tab>

        <v-tabs-items v-model="tab">
          <v-divider></v-divider>
          <v-tab-item :class="$vuetify.breakpoint.mobile ? null : 'pt-3'">
            <v-row :no-gutters="$vuetify.breakpoint.mobile">
              <template v-for="(item, index) in item.specs">
                <v-col cols="12" md="6" :key="index" class="py-0">
                  <v-list-item
                    class="px-0"
                    :class="$vuetify.breakpoint.mobile ? null : 'py-1'"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="text-h6" v-text="item.title" />
                    </v-list-item-content>
                    <v-list-item-action
                      class="text-h6 font-weight-regular silver--text"
                      v-text="item.text"
                    />
                  </v-list-item>
                  <v-divider></v-divider>
                </v-col>
              </template>
              <!-- empty -->
              <v-col v-if="item.specs.length < 1" class="text-center">
                <div class="text-h6 py-6">Sin Especificaciones</div>
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row :no-gutters="$vuetify.breakpoint.mobile">
              <!--  -->
              <template v-for="(item, index) in item.attachments">
                <v-col :key="index">
                  <v-list-item class="px-0 py-md-2">
                    <v-list-item-icon>
                      <v-icon color="accent">mdi-file-document-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="text-h6">
                        <a
                          :href="item.file"
                          target="_black"
                          class="text-decoration-none"
                        >
                          {{ item.name }}
                        </a>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                </v-col>
              </template>
              <!-- empty -->
              <v-col v-if="item.attachments.length < 1" class="text-center">
                <div class="text-h6 py-6">Sin Archivos</div>
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>

      <!-- 03. related -->
      <div class="mt-9 mt-md-16">
        <v-divider v-if="!$vuetify.breakpoint.mobile" />
        <v-row class="pt-9">
          <v-col cols="12" md="3">
            <h5 class="text-h5 font-weight-medium">
              <span class="font-weight-bold accent--text mr-3">/</span>
              <span class="concrete--text">Otros Equipos</span>
            </h5>
          </v-col>

          <template v-for="(item, index) in item.related">
            <v-col cols="12" md="3" :key="index" v-if="!item.disabled">
              <v-card
                tile
                flat
                class="product-item-list"
                @click="getProduct(item.sku)"
                active-class="red"
              >
                <!-- image -->
                <v-card-text>
                  <v-img
                    contain
                    height="190"
                    :src="item.image"
                    v-if="item.image"
                  />
                  <v-card
                    flat
                    v-else
                    color="cloud"
                    height="190"
                    class="d-flex align-center justify-center"
                  >
                    <v-icon color="grey">mdi-image-off-outline</v-icon>
                  </v-card>
                </v-card-text>
                <!-- name -->
                <v-card-title class="px-0 py-2 primary--text">
                  {{ item.name }}
                  <v-spacer />
                  <v-icon
                    small
                    color="accent"
                    v-if="!$vuetify.breakpoint.mobile"
                    >mdi-arrow-right</v-icon
                  >
                </v-card-title>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </div>
    </v-container>

    <!-- mobile -->
    <v-footer app elevation="4" class="pa-4" v-if="$vuetify.breakpoint.mobile">
      <v-btn
        color="primary"
        :disabled="loading"
        block
        large
        depressed
        @click="addToCart(item)"
      >
        Cotizar Equipo
      </v-btn>
    </v-footer>
  </div>
</template>

<script>
import _ from "lodash";
import { mapActions } from "vuex";
import PageHeader from "../components/pages/PageHeader.vue";

export default {
  components: { PageHeader },

  data: () => ({
    tab: null,
    item: {
      specs: [],
      attachments: [],
    },
    loading: false,
  }),

  methods: {
    ...mapActions("Product", ["readerProduct"]),

    addToCart(item) {
      const product = _.pick(item, ["name", "sku", "image"]);
      this.$store.commit("Cart/ADD_TO_CART", product);
    },

    async getProduct(sku) {
      this.loading = true;
      window.scrollTo(0, 0);
      this.$router.replace({ name: "Product", query: { id: sku } });
      await this.readerProduct(sku).then((resp) => {
        this.item = resp;
      });

      this.loading = false;
    },
  },

  async mounted() {
    this.loading = true;
    await this.readerProduct(this.$route.query.id).then((resp) => {
      this.item = resp;
    });
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.product-container {
  position: relative;
  min-height: 60vh;
}

.product-item-list {
  .v-card__text {
    border: 1px solid #e6e6e6;
  }

  &:focus {
    &:before {
      opacity: 0;
    }
  }
}
</style>