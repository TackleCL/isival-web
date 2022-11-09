<template>
  <div class="rental">
    <page-header title="Servicio Rental" />

    <v-container>
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td v-text="item.title"></td>

            <td>${{ item.price.toFixed(2) }}</td>

            <td><v-btn @click="addToCart(item)">Agregar</v-btn></td>
          </tr>
        </tbody>
      </table>
    </v-container>
  </div>
</template>

<script>
import PageHeader from "@/components/pages/PageHeader.vue";

export default {
  components: { PageHeader },

  data: () => ({
    items: [
      {
        id: 1,
        title: "Children of Bodom - Hatebreeder",
        price: 9.99,
      },
      {
        id: 2,
        title: "Emperor - Anthems to the Welkin at Dusk",
        price: 6.66,
      },
      {
        id: 3,
        title: "Epica - The Quantum Enigma",
        price: 15.99,
      },
      {
        id: 4,
        title: "Chthonic - Takasago Army",
        price: 14.0,
      },
      {
        id: 5,
        title: "Silencer - Death - Pierce Me",
        price: 1.2,
      },
      {
        id: 6,
        title: "My Dying Bride - 34.788%... Complete",
        price: 10.0,
      },
      {
        id: 7,
        title: "Shape of Despair - Shades of",
        price: 7.8,
      },
      {
        id: 8,
        title: "Ne Obliviscaris - Portal of I",
        price: 11.3,
      },
      {
        id: 9,
        title: "Protest the Hero - Fortress",
        price: 5.55,
      },
      {
        id: 10,
        title: "Dark Lunacy - Devoid",
        price: 6.0,
      },
    ],
  }),

  methods: {
    addToCart(item) {
      this.$store.commit("ADD_CART", item);
    },
  },
};
</script>