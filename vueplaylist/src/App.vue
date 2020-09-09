<template>
  <div>
    <app-header></app-header>
    <paans></paans>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
import Paans from "./components/Paans";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    paans: Paans,
  },

  data() {
    return {};
  },
};
</script>

<style >
</style>
