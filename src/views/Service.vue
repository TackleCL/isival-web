<template>
  <div class="service">
    <!-- header -->
    <v-app-title title="Servicio Técnico" />

    <!-- content -->
    <v-container>
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
        <v-col cols="12" md="3">
          <h4 class="mb-3 text-h6">Cotiza Repustos</h4>
          <v-form ref="form" @submit.prevent>
            <v-text-field filled dense label="Nombre" />
            <v-text-field
              filled
              dense
              hide-details
              label="Email *"
              type="email"
            />
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <!-- loading -->
    <v-app-loading v-model="loading" :absolute="true" />
  </div>
</template>

<script>
import vAppTitle from "../layout/Title.vue";
import vAppLoading from "../layout/Loading.vue";

export default {
  data: () => ({ loading: false }),
  components: { vAppTitle, vAppLoading },
  created() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 500);
  },
};
</script>