<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All the blogs</h1>
    <input type="text" v-model="search" placeholder="Search posts" />
    <div v-bind:key="post" v-for="post in filteredBlogs " class="single-blog">
      <h2 v-rainbow>{{ post.title | to-uppercase}}</h2>
      <article>{{ post.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
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
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (data) {
        this.posts = data.body.slice(0, 10);
      });
  },
  computed: {
    filteredBlogs: function () {
      return this.posts.filter((post) => {
        return post.title.match(this.search);
      });
    },
  },
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
