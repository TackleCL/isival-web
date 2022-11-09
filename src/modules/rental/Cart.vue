<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link" href=""> Cart ({{ $store.state.cartCount }}) </a>

    <div
      v-if="$store.state.cart.length > 0"
      class="navbar-dropdown is-boxed is-right"
    >
      <a
        v-for="item in $store.state.cart"
        :key="item.id"
        class="navbar-item"
        href=""
      >
        <v-btn @click.prevent="removeFromCart(item)">Delete</v-btn>

        {{ item.title }} x{{ item.quantity }}
      </a>
      <hr class="navbar-divider" />

      <a class="navbar-item" href=""> Checkout </a>
    </div>

    <div v-else class="navbar-dropdown is-boxed is-right">
      <a class="navbar-item" href=""> Cart is empty </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    },
  },
};
</script>