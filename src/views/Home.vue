<template>
  <div class="home">
    <!-- 01. presentation -->
    <section class="my-12">
      <v-container>
        <v-row align="center" justify="space-between" style="min-height: 290px">
          <v-col cols="12" md="5">
            <h2 class="text-h4 text-md-h3 font-weight-bold">
              Especialistas en bombas sumergibles
            </h2>
          </v-col>
          <v-col cols="12" md="5">
            <p class="text-h6 font-weight-regular text--secondary mb-0">
              Somos una empresa especialista con más de 00 años de experiencia
              en la venta, arriendo, servicio técnico, repuestos y asesoría
              técnica en tus proyectos de agua.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 02. services -->
    <section class="blue lighten-5 py-9">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="5" class="text-center">
            <h6 class="text-button primary--text">
              Soluciones para tus proyectos
            </h6>
            <h3 class="text-h4 font-weight-bold">Nuestros Servicios</h3>
            <p class="text-subtitle-1 mt-3 text--secondary">
              Te asesoramos en todos los procesos para que puedas dar solución a
              tus problemas y conseguir tus objetivos.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <template v-for="(item, index) in services">
            <v-col cols="12" md="3" :key="index">
              <v-card flat>
                <v-card-text class="text-center py-9">
                  <v-avatar
                    color="blue lighten-5"
                    class="rounded-lg mb-3"
                    size="69"
                  >
                    <v-icon color="primary" large>
                      {{ `mdi-${item.icon}` }}
                    </v-icon>
                  </v-avatar>
                  <h6 class="text-h6 black--text">{{ item.title }}</h6>
                  <p
                    class="
                      text-subtitle-1 text-md-subtitle-2
                      font-weight-regular
                      mb-0
                    "
                  >
                    {{ item.text }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </section>

    <!-- 03. slide -->
    <section class="my-9 my-md-16">
      <v-container class="py-0">
        <v-carousel
          cycle
          class="rounded-lg"
          hide-delimiter-background
          :height="isMobile ? 250 : 500"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Home",

  data: () => ({
    items: [
      { src: "http://www.isival.cl/wp-content/uploads/2017/08/1slider.jpg" },
      { src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg" },
    ],

    services: [
      {
        icon: "package-variant-closed-check",
        title: "Venta Equipos",
        text: "Disponemos de bombas sumergibles, agitadores sumergibles, sistemas de aireación, turbocompresores, etc.",
      },
      {
        icon: "calendar-multiselect",
        title: "Servicio Rental",
        text: "Contamos con una amplia cantidad de equipos de diferentes aplicaciones y potencias.",
      },
      {
        icon: "account-wrench-outline",
        title: "Repuestos",
        text: "Tenemos de una amplia gama de repuesto y partes originales de ABS- SULZER.",
      },
      {
        icon: "toolbox-outline",
        title: "Servicio Técnico",
        text: "Contamos con servicio técnico, con personal capacitado para la reparación de equipos sumergibles.",
      },
    ],
  }),

  computed: {
    ...mapState(["isMobile"]),
  },
};
</script>