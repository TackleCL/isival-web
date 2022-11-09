<template>
  <v-carousel cycle continuous hide-delimiters v-model="model" :height="height">
    <!-- button: prev -->
    <template v-slot:prev="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on">Previous</v-btn>
    </template>

    <!-- button: next -->
    <template v-slot:next="{ on, attrs }">
      <v-btn color="info" v-bind="attrs" v-on="on">Next</v-btn>
    </template>

    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">Slide {{ i + 1 }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ["height"],

  data: () => ({
    model: 0,
    colors: ["primary"],
  }),
};
</script>