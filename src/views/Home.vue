<template>
  <div class="home">
    <!-- @section: presentation -->
    <v-container>
      <v-row
        class="px-6 px-md-0 my-3 mb-6 my-md-16 py-md-6"
        align="center"
        justify="space-between"
      >
        <v-col cols="12" md="5">
          <h3 class="text-h3 font-weight-medium">
            Especialistas en bombas sumergibles
          </h3>
        </v-col>
        <v-col cols="12" md="5">
          <p class="mb-0 text-subtitle-1 text--secondary">
            Somos una empresa especialista con más de 00 años de experiencia en
            la venta, arriendo, servicio técnico, repuestos y asesoría técnica
            en tus proyectos de agua.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- @section: slide -->
    <v-card tile flat>
      <v-img
        src="http://www.isival.cl/wp-content/uploads/2017/08/1slider.jpg"
        height="500"
      />
      <!-- <carousel height="500" /> -->
    </v-card>

    <v-container>
      <!-- @section: services -->
      <v-card flat style="margin-top: -60px">
        <v-card-text>
          <v-row justify="space-between" align="center" class="px-6">
            <v-col cols="12" md="5">
              <p
                class="
                  secondary--text
                  font-weight-medium
                  my-4
                  mt-6 mt-md-9
                  mb-0
                "
              >
                <span class="font-weight-bold accent--text">/</span>
                NUESTRA OFERTA
              </p>
              <h3
                class="text-h4 text-md-h3 font-weight-medium black--text mb-3"
              >
                Soluciones para ti
              </h3>
              <p class="text-h6 font-weight-regular text-break">
                Te asesoramos en todos los procesos para que puedas dar solución
                a tus problemas y conseguir tus objetivos.
              </p>
            </v-col>
            <v-col cols="12" md="6" class="pt-md-9">
              <template v-for="(item, index) in services">
                <item-service
                  :key="item.title"
                  :icon="item.icon"
                  :title="item.title"
                  :text="item.text"
                />
                <v-divider v-if="index < services.length - 1" :key="index" />
              </template>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- @section: banner -->
      <div class="px-3 px-md-0 | my-6 mb-9 my-md-15"><banner-services /></div>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemService from "@/components/pages/home/ItemService.vue";
import BannerServices from "@/components/pages/home/BannerServices.vue";

export default {
  name: "Home",
  components: { ItemService, BannerServices },

  data: () => ({
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
        text: "Disponemos de una amplia gama de repuesto originales de ABS- SULZER.",
      },
      {
        icon: "toolbox-outline",
        title: "Servicio Técnico",
        text: "Contamos con servicio técnico, con personal capacitado para la reparación de equipos sumergibles.",
      },
    ],
  }),
};
</script>
