<template>
  <div class="parts">
    <!-- header -->
    <v-app-title title="Repuestos" />

    <!-- content -->
    <v-container class="mb-6">
      <v-row>
        <!-- content -->
        <v-col cols="12" md="8">
          <p class="text-h6 font-weight-regular mt-9">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus expedita id quos odit nisi ipsum quia facere
            officiis! In, magnam.
          </p>
        </v-col>

        <!-- form -->
        <v-col cols="12" md="4">
          <h4 class="mb-3 text-h6">Cotiza Repustos</h4>
          <v-form ref="form" @submit.prevent>
            <!-- name -->
            <v-text-field
              outlined
              label="Nombre"
              :rules="required"
              v-model="item.name"
            />
            <!-- email -->
            <v-text-field
              outlined
              label="Email *"
              type="email "
              :rules="required"
              v-model="item.email"
            />
            <!-- file -->
            <v-file-input
              outlined
              label="Imagen"
              prepend-icon
              prepend-inner-icon="mdi-camera-plus-outline"
              v-model="image"
            />
            <!-- button -->
            <v-btn
              block
              depressed
              x-large
              @click="onSubmit"
              :loading="isLoading"
              :disabled="isLoading"
              color="primary"
            >
              Enviar
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <!-- loading -->
    <v-app-loading v-model="loading" :absolute="true" />
  </div>
</template>

<script>
import forms from "@/mixins/forms";
import upload from "@/mixins/files";
import vAppTitle from "../layout/Title.vue";
import vAppLoading from "../layout/Loading.vue";
import { mapActions } from "vuex";

export default {
  data: () => ({ item: {}, image: null, loading: false, isLoading: false }),

  mixins: [forms, upload],

  components: { vAppTitle, vAppLoading },

  methods: {
    ...mapActions(["formParts"]),

    async onSubmit() {
      if (this.$refs.form.validate()) {
        this.isLoading = true;

        const product = {
          createAt: new Date(),
          ...this.item,
        };

        // 02. upload image
        if (this.image) {
          await this.imageUpload(this.image)
            .then((resp) => {
              product.image = resp;
            })
            .catch((err) => {
              console.error(err);
              return;
            });
        } else {
          product.image = null;
        }

        // create request
        await this.formParts(product);
        this.isLoading = false;
        this.$refs.form.reset()
      }
    },
  },

  created() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 500);
  },
};
</script>