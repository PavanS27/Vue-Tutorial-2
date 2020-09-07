new Vue({
  el: "#vue-app",
  data: {
    name: "Paan",
  },
  methods: {
    greet: function (time) {
      return "Good" + " " + time + " " + this.name;
    },
  },
});
