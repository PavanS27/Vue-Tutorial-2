<template>
  <div>
    <h1>{{title}}</h1>
    <pavan></pavan>
  </div>
</template>

<script>
import Pavan from "./Pavan.vue";

export default {
  components: {
    pavan: Pavan,
  },
  data() {
    return {
      title: "Pavan app",
    };
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
