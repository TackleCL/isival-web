<template>
  <div class="about">
    <!-- header -->
    <v-app-title title="Quienes Somos" />

    <!-- @content -->
    <v-container>
      <!-- @section: text -->
      <v-row class="py-4 py-md-12" align="center" justify="space-between">
        <v-col cols="12" md="5">
          <h6 class="text-h6 text-md-h5">
            Isival Ingenieria limitada, ofrece sus servicios de Arriendo de
            bombas Achique, venta de repuestos y bombas sumergibles, como
            también dispone de Servicio técnico especializado. Cuenta con la
            representación de SULZER, en el área Sanitaria.
          </h6>
        </v-col>
        <v-col cols="12" md="6" class="text--secondary">
          <p>
            Isival Ingenieria Ltda., constituida a partir del año 2002 tiene
            como objetivo principal la entrega de soluciones especificas e
            individuales a nuestros cliente en el ámbito de manejos de agua.
          </p>
          <p>
            Reconocida por su alta calidad en su amplio catalogo de producto
            cuenta con equipos de origen europeo y americano, de este modo
            nuestra compañía proporciona en el suministro y servicio otorgado al
            cliente.
          </p>
          <p class="mb-0">
            Isival a lo largo de su trayectoria a sumado representaciones de
            equipos de bombeo de las marcas ABS SULZER de procedencia Sueca.
          </p>
        </v-col>
      </v-row>

      <!-- @section: mission -->
      <div class="mt-9">
        <v-card flat color="#00308A" class="section--mission">
          <v-card-text class="py-9 py-md-16">
            <v-row class="py-md-8">
              <v-col cols="12" md="6" lg="5" class="px-6 pl-lg-16">
                <h6 class="text-h6 text-md-h5 font-weight-medium">
                  <span class="accent--text font-weight-bold">/</span>
                  <span class="white--text ml-3">Misión</span>
                </h6>
                <p class="white--text text-body-1 mt-3">
                  Isival Ingeniería Ltda., tiene como misión entregar un
                  servicio integral para la satisfaccion de sus clietnes, a
                  través de la solcuión en el manejo de fluidos y la entrega de
                  servicios de reparación, arriendo y venta de bombas
                  sumergibles, con altos estandares de calidad, personal
                  especializado y alianzas estratégicas con proveedores
                  nacionales e internacionales.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>

      <!-- @section: vision -->
      <v-row class="my-9 my-md-16 py-md-12" align="center">
        <v-col cols="12" md="8" order-md="2" class="pl-md-15">
          <h6 class="text-h4 font-weight-medium">
            <span class="accent--text font-weight-bold">/</span>
            <span class="ml-3">Visión</span>
          </h6>
          <p class="text--secondary mt-4">
            Ser una empresa de manejo de fluidos reconocidas a nivel nacional,
            por sus servicios de reparación, arriendo y venta debombas
            sumergibles, como tambien por sus soluciones innovadoras y de alto
            estándares de calidad.
          </p>
        </v-col>
        <v-col cols="12" md="4" order-md="1">
          <img src="@/assets/about-vision.png" alt="" width="100%" />
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
  components: { vAppTitle, vAppLoading },

  data: () => ({ loading: false }),

  created() {
    this.loading = true;

    setTimeout(() => (this.loading = false), 600);
  },
};
</script>

<style lang="scss" scoped>
.section--mission {
  background-position: right center;
  background-image: url("../assets/about-mission.png");
}
</style>