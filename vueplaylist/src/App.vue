<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "First Vue File yea",
    };
  },
  methods: {
    greeting: function () {
      return "Hello Paan";
    },
  },
};
</script>

<style>
</style>
