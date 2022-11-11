<template>
  <div>
    <pre>
      {{ item }}
    </pre>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    item: {},
  }),

  methods: {
    ...mapActions("Product", ["readerProduct"]),
  },

  async mounted() {
    this.loading = true;
    await this.readerProduct(this.$route.query.id).then((resp) => {
      this.item = resp;
    });
    this.loading = false;
  },
};
</script>