import Show from "./components/showblogs.vue";
import Add from "./components/Blog.vue";
import singleBlog from "./components/singleBlog.vue";

export default [
  {
    path: "/",
    component: Show
  },
  {
    path: "/add",
    component: Add
  },
  {
    path: "/blog/:id",
    component: singleBlog
  }
];
