new Vue({
  el: "#vue-app",
  data: {
    name: "Paan",
    website: "https://www.google.com/",
    websiteTag: "<a href='https://www.google.com/'>Google</a>",
    age: 20,
    x: 0,
    y: 0,
  },
  methods: {
    greet: function (time) {
      return "Good" + " " + time + " " + this.name;
    },
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      (this.x = event.offsetX), (this.y = event.offsetY);
    },
    click: function () {
      alert("you clicked");
    },
    logName: function () {
      console.log("Entered Name");
    },
    logAge: function () {
      console.log("Entered Age");
    },
  },
});
