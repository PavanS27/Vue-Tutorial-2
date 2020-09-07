new Vue({
  el: "#vue-app",
  data: {
    name: "Paan",
    website: "https://www.google.com/",
    websiteTag: "<a href='https://www.google.com/'>Google</a>",
  },
  methods: {
    greet: function (time) {
      return "Good" + " " + time + " " + this.name;
    },
  },
});
