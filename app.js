new Vue({
  el: "#vue-app",
  data: {
    name: "Paan",
    website: "https://www.google.com/",
    websiteTag: "<a href='https://www.google.com/'>Google</a>",
    age: 20,
    x: 0,
    y: 0,
    Name: "",
    Age: "",
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    suc: false,
    characters: ["mario", "luigi", "yoshi", "bowser"],
    ninjas: [
      { name: "Ryu", age: 25 },
      { name: "Pyu", age: 27 },
      { name: "Myu", age: 29 },
    ],
    health: 100,
    ended: false,
    output: "Fav Food",
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
    // addToA: function () {
    //   return this.a + this.age;
    // },
    // addToB: function () {
    //   return this.b + this.age;
    // },
    punch: function () {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function () {
      this.health = 100;
      this.ended = false;
    },
    readRefs: function () {
      console.log(this.$refs.input.value);
      this.output = this.$refs.input.value;
    },
  },
  computed: {
    addToA: function () {
      console.log("A");
      return this.a + this.age;
    },
    addToB: function () {
      console.log("B");
      return this.b + this.age;
    },
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
  },
});
Vue.component("greeting", {
  template:
    "<p>Hey There {{name}} . <button v-on:click='chnageName'>Change name</button></p> ",
  data: function () {
    return {
      name: "Paan",
    };
  },
  methods: {
    chnageName: function () {
      this.name = "Pimpa";
    },
  },
});

var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue app One",
  },
  methods: {},
  computed: {
    greet: function () {
      return "Hello from One";
    },
  },
});

var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue app Two",
  },
  methods: {
    changeTitle: function () {
      one.title = "Iam changed wtf";
    },
  },
  computed: {
    greet: function () {
      return "Iam the second one.Hey";
    },
  },
});
