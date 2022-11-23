<template>
  <div class="products">
    <!-- header -->
    <v-app-title title="Rental Equipos" />

    <!-- content -->
    <main class="products-main">
      <v-container class="mt-3 mt-md-15 product-container">
        <template v-for="(item, index) in products">
          <v-row
            :key="index"
            v-if="!item.disabled && item.products.length > 0"
            :class="index > 1 ? 'mt-9 mt-md-15' : null"
          >
            <!-- nameCategory -->
            <v-col cols="12" md="4">
              <h4 class="text-h5 text-md-h4 font-weight-medium">
                <span class="accent--text font-weight-bold">/</span>
                <span class="concrete--text ml-3">{{ item.name }}</span>
              </h4>
            </v-col>

            <!-- itemsCategory -->
            <v-col cols="12" md="8">
              <v-row>
                <!-- item -->
                <template v-for="(product, index) in item.products">
                  <v-col cols="12" md="4" :key="index" v-if="!product.disabled">
                    <v-card
                      tile
                      flat
                      class="product-item-list"
                      :to="{ name: 'Product', query: { id: product.sku } }"
                    >
                      <!-- image -->
                      <v-card-text>
                        <v-img
                          contain
                          height="190"
                          :src="product.image"
                          v-if="product.image"
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
                        {{ product.name }}
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
            </v-col>
          </v-row>
        </template>
      </v-container>
    </main>

    <!-- loading -->
    <v-app-loading v-model="loading" :absolute="true" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import vAppTitle from "../layout/Title.vue";
import vAppLoading from "../layout/Loading.vue";

export default {
  components: { vAppTitle, vAppLoading },

  data: () => ({
    loading: false,
  }),

  computed: {
    ...mapState("Product", ["products"]),
  },

  methods: {
    ...mapActions("Product", ["readerProducts"]),
  },

  async mounted() {
    this.loading = true;
    await this.readerProducts();
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

  &:hover {
    .v-card__title {
      .v-icon {
        margin-right: 50px;
      }
    }
  }
}
</style>