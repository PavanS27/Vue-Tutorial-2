<template>
  <div id="ninjas">
    <ul>
      <li v-bind:key="ninja" v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <h1>{{ninja.name}}</h1>
        <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteNinja">Delete</button>
  </div>
</template>

<script>
export default {
  props: ["ninjas"],
  data() {
    return {};
  },
  methods: {
    deleteNinja: function () {
      this.ninjas.pop();
    },
  },
  //lifecycle hooks

  // beforeCreate() {
  //   alert("Before create");
  // },
  // created() {
  //   alert("created");
  // },
  // beforeMount() {
  //   alert("Before Mount");
  // },
  // mounted() {
  //   alert("mounted");
  // },
  // beforeUpdate() {
  //   alert("BeforeUpdate");
  // },
  // updated() {
  //   alert("Updated");
  // },
};
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
