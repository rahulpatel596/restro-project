import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreateYourPlan from "../views/CreateYourPlan.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/createYourPlan",
    name: "createYourPlan",
    component: CreateYourPlan,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;