import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeComp from "./components/views/HomeComp.vue";
import AboutComp from  "./components/views/AboutComp.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeComp,
    },
    {
      path: "/about",
      name: "About",
      component: AboutComp,
    },
  ],
});
createApp(App)
    .use(router)
    .mount("#app");
