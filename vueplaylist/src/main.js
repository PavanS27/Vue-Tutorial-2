import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

export const bus = new Vue();

Vue.use(VueResource);

//Filters

Vue.filter("snippet", function(value) {
  return value.slice(0, 100) + "...";
});

//CustomDirectives

Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
