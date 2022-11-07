<template>
  <div class="home">
    <!-- @section: presentation -->
    <v-container>
      <v-row class="py-8 py-md-16" align="center" justify="space-between">
        <v-col cols="12" md="5">
          <h3 class="text-h3 font-weight-medium">
            Especialistas en bombas sumergibles
          </h3>
        </v-col>
        <v-col cols="12" md="5">
          <p class="mb-0">
            Somos una empresa especialista con más de 00 años de experiencia en
            la venta, arriendo, servicio técnico, repuestos y asesoría técnica
            en tus proyectos de agua.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- @section: slide -->
    <v-card tile flat color="grey" height="500">
      <v-img
        src="http://www.isival.cl/wp-content/uploads/2017/08/1slider.jpg"
        height="500"
      />
    </v-card>

    <v-container>
      <!-- @section: services -->

      <v-card flat style="margin-top: -30px" class="pb-8 pb-md-16">
        <!-- title -->
        <v-card-title>
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <p class="accent--text font-weight-medium">NUESTRA OFERTA</p>
              <h3 class="text-h3 font-weight-medium">Soluciones para ti</h3>
            </v-col>
            <v-col cols="12" md="6" class="text-center pt-0">
              <p class="text-h6 font-weight-regular text-break">
                Te asesoramos en todos los procesos para que puedas dar solución
                a tus problemas y conseguir tus objetivos.
              </p>
            </v-col>
          </v-row>
        </v-card-title>
        <!-- content -->
        <v-card-text class="pt-8 pt-md-16">
          <v-row>
            <v-col cols="12" md="3">
              <service
                item="01"
                icon="mdi-package-variant-closed-check"
                title="Venta Equipos"
                text="Disponemos de bombas sumergibles, agitadores sumergibles, sistemas de aireación, turbocompresores, etc."
              />
            </v-col>
            <v-col cols="12" md="3">
              <service
                item="02"
                icon="mdi-calendar-multiselect"
                title="Servicio Rental"
                text="Contamos con una amplia cantidad de equipos de diferentes aplicaciones y potencias."
              />
            </v-col>
            <v-col cols="12" md="3">
              <service
                item="03"
                icon="mdi-account-wrench-outline"
                title="Repuestos"
                text="Disponemos de una amplia gama de repuesto originales de ABS- SULZER."
              />
            </v-col>
            <v-col cols="12" md="3">
              <service
                item="04"
                icon="mdi-toolbox-outline"
                title="Servicio Técnico"
                text="Contamos con servicio técnico, con personal capacitado para la reparación de equipos sumergibles."
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- @section: banner -->
      <banner  class="my-10 my-md-16"/>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Service from "@/components/ItemHome.vue";
import Banner from '@/components/Banner.vue'

export default {
  name: "Home",
  components: {
    Banner,
    Service,
  },
};
</script>
