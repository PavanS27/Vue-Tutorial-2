<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All the blogs</h1>
    <input type="text" v-model="search" placeholder="Search posts" />
    <div v-bind:key="post" v-for="post in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + post.id">
        <h2>{{ post.title | (to - uppercase) }}</h2>
      </router-link>
      <article>{{ post.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import Search from "../mixins/searchmixin";
export default {
  data() {
    return {
      posts: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://vuejs-cf317.firebaseio.com/posts.json")
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.posts = blogsArray;
      });
  },
  computed: {},
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },
  mixins: [Search],
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0px;
  box-sizing: border-box;
  background: #eee;
}
</style>
