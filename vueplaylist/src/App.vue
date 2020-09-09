<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <paans v-bind:ninjas="ninjas"></paans>

    <app-footer v-bind:title="title"></app-footer>
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
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false },
      ],
      title: "Welcome paan",
    };
  },
};
</script>

<style >
</style>
