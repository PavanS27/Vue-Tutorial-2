<template>
  <div>
    <!-- <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <paans v-bind:ninjas="ninjas"></paans>
    <app-footer v-bind:title="title"></app-footer>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Info of the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>-->
    <!-- <blog></blog> -->
    <add></add>
  </div>
</template>

<script>
// import Header from "./components/header";
// import Footer from "./components/footer";
// import Paans from "./components/Paans";
// import formHelper from "./components/formHelper";
import Blog from "./components/Blog";
import Add from "./components/showblogs";

export default {
  components: {
    //   "app-header": Header,
    //   "app-footer": Footer,
    //   paans: Paans,
    //   "form-helper": formHelper,
    blog: Blog,
    add: Add
  },

  data() {
    return {
      //   ninjas: [
      //     { name: "Ryu", speciality: "Vue Components", show: false },
      //     { name: "Crystal", speciality: "HTML Wizardry", show: false },
      //     { name: "Hitoshi", speciality: "Click Events", show: false },
      //     { name: "Tango", speciality: "Conditionals", show: false },
      //     { name: "Kami", speciality: "Webpack", show: false },
      //     { name: "Yoshi", speciality: "Data Diggin", show: false },
      //   ],
      //   title: "Welcome paan",
    };
  },
  methods: {
    // updateTitle: function (event) {
    //   this.title = event;
    // },
  }
};
</script>

<style></style>
