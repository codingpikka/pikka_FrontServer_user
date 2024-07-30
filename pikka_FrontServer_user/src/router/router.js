import Vue from "vue";
import Router from "vue-router";
import AppHeader from "../layout/AppHeader.vue"; // 경로 수정
import AppFooter from "../layout/AppFooter.vue"; // 경로 수정
import Components from "../views/Components.vue"; // 경로 수정
import Write from "../views/Write.vue"; // 경로 수정
import History from "../views/History.vue"; // 경로 수정
import Inquiry from "../views/Inquiry.vue"; // 경로 수정
import Job from "../views/Job.vue"; // 경로 수정
import JobDetail from '../views/JobDetail.vue'; // 경로 수정
import Certification from "../views/Certification.vue"; // 경로 수정
import CertificationDetail from "../views/CertificationDetail.vue"; // 경로 수정
import Post from "../views/Post.vue"; // 경로 수정

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
      }
    },
    {
      path:"/jobdetail",
      name: "jobDetail",
      components:{
        header: AppHeader,
        default: JobDetail,
        footer: AppFooter
      }
    },
    {
      path: "/post",
      name: "post",
      components: {
        header: AppHeader,
        default: Post,
        footer: AppFooter,
      },
    },
    {
      path: "/certification",
      name: "certification",
      components: {
        header: AppHeader,
        default: Certification,
        footer: AppFooter,
      },
    },
    {
      path: "/certificationDetail",
      name: "certificationDetail",
      components: {
        header: AppHeader,
        default: CertificationDetail,
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