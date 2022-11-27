import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        progress: 0
      },
      component: HomeView
    },
    {
      path: "/step1",
      name: "step1",
      meta: {
        progress: 1
      },
      component: () => import("../views/Step1.vue"),
    }, 
    {
      path: "/step2",
      name: "step2",
      meta: {
        progress: 2
      },
      component: () => import("../views/Step2.vue"),
    }, 
    {
      path: "/step3",
      name: "step3",
      meta: {
        progress: 3
      },
      component: () => import("../views/Step3.vue"),
    }, 
    {
      path: "/step4",
      name: "step4",
      meta: {
        progress: 4
      },
      component: () => import("../views/Step4.vue"),
    }, 
    {
      path: "/step5",
      name: "step5",
      meta: {
        progress: 5
      },
      component: () => import("../views/Step5.vue"),
    }, 
    {
      path: "/step6",
      name: "step6",
      meta: {
        progress: 6
      },
      component: () => import("../views/Step6.vue"),
    }, 
    {
      path: "/step7",
      name: "step7",
      meta: {
        progress: 7
      },
      component: () => import("../views/Step7.vue"),
    }, 
    {
      path: "/step8",
      name: "step8",
      meta: {
        progress: 8
      },
      component: () => import("../views/Step8.vue"),
    }, 
    {
      path: "/step9",
      name: "step9",
      meta: {
        progress: 9
      },
      component: () => import("../views/Step9.vue"),
    }, 
    {
      path: "/step10",
      name: "step10",
      meta: {
        progress: 10
      },
      component: () => import("../views/Step10.vue"),
    }, 
    {
      path: "/end",
      name: "end",
      meta: {
        progress: 10
      },
      component: () => import("../views/End.vue"),
    }, 
  ]
})

export default router
