import { createRouter, createWebHistory } from "vue-router";
import Header from "@/components/Header.vue";
import Home from "@/pages/Home.vue";

const routes = [
  { path: "/header", component: Header, name: "Header" },
  { path: "/home", component: Home, name: "Home" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
