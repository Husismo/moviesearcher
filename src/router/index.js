import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "@/views/homePage.vue";
import favoritesPage from "@/views/favoritesPage.vue";
import trendingPage from "@/views/trendingPage.vue";
import upcomingPage from "@/views/upcomingPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "homePage",
    component: homePage,
  },
  {
    path: "/favorites",
    name: "favoritesPage",
    component: favoritesPage,
  },
  {
    path: "/trending",
    name: "trendingPage",
    component: trendingPage,
  },
  {
    path: "/comingsoon",
    name: "upcoming",
    component: upcomingPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
