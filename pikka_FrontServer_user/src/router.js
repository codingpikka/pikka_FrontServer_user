import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/common/Landing.vue";
import Login from "./views/common/Login.vue";
import Register from "./views/common/Register.vue";
import Profile from "./views/common/Profile.vue";
import Write from "./views/Write.vue";
import History from "./views/History.vue";
import Inquiry from "./views/Inquiry.vue";
import Job from "./views/Job.vue";
import HistoryComponent from "./views/components/mypage/HistoryComponent.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter,
      },
    },
    {
      path: "/job",
      name: "job",
      components: {
        header: AppHeader,
        default: Job,
        footer: AppFooter
    
      },
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter,
      },
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter,
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter,
      },
    },
    {
      path: "/write",
      name: "write",
      components: {
        header: AppHeader,
        default: Write,
        footer: AppFooter,
      },
    },
    {
      path: "/inquiry",
      name: "inquiry",
      components: {
        header: AppHeader,
        default: Inquiry,
        footer: AppFooter,
      },
    },
    {
      path: "/history",
      name: "HistoryPage",
      components: {
        header: AppHeader,
        default: History,
        footer: AppFooter,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
