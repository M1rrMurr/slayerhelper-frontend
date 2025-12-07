import HomeView from "@/views/HomeView.vue";
import TestView from "@/views/TestView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView, name: "Home" },
    { path: "/test", component: TestView, name: "test" },
  ],
});

export default router;
