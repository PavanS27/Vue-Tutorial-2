<template>
  <div>
    <h1>list of paans</h1>
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

<style scoped>
h1 {
  color: green;
}
</style>
