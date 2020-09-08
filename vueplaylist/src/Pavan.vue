<template>
  <div>
    <ul>
      <li v-bind:key="paan" v-for="paan in paans">{{paan}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paans: ["Mario", "tadashi", "Ryu"],
    };
  },
};
</script>

<style>
</style>
