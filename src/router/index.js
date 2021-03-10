/**
 * @copyright
 * @description router全局配置，如有必要可分文件抽离
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";
import EmptyLayout from "@/layouts/EmptyLayout";
import { publicPath, routerMode } from "@/config/settings";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/register",
    component: () => import("@/views/register/index"),
    hidden: true,
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/401"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404"),
    hidden: true,
  },
];

/*当settings.js里authentication配置的是intelligence时，views引入交给前端配置*/
export const asyncRoutes = [
  {
    path: "/",
    // component: Layout,
    redirect: "/applyfor/new",
    hidden: true,
    // children: [
    //   {
    //     path: "/index",
    //     name: "Index",
    //     component: () => import("@/views/index/index"),
    //     meta: {
    //       title: "首页",
    //       icon: "home",
    //       affix: false,
    //       noKeepAlive: true,
    //     },
    //   },
    // ],
  },
  {
    path: "/applyfor",
    component: Layout,
    redirect: "new",
    name: "ActueApplyfor",
    alwaysShow: true,
    meta: {
      title: "样机申请",
      icon: "coins",
      permissions: ["tsc-master-data"],
    },
    children: [
      {
        path: "new",
        name: "NewApplyfor",
        component: () => import("@/views/project/applyfor/new/index"),
        meta: {
          title: "新建申请",
          affix: false,
          noKeepAlive: true,
          permissions: ["tsc-location-inventory"],
        },
      },
      {
        path: "myApplyfor",
        name: "MyApplyfor",
        component: () => import("@/views/project/applyfor/new/index"),
        meta: {
          title: "我的申请",
          affix: false,
          noKeepAlive: true,
          permissions: ["tsc-location-inventory"],
        },
      },
      {
        path: "myApproval",
        name: "MyApproval",
        component: () => import("@/views/project/applyfor/new/index"),
        meta: {
          title: "我的审批",
          affix: false,
          noKeepAlive: true,
          permissions: ["tsc-location-inventory"],
        },
      },
      {
        path: "applyforQuery",
        name: "ApplyforQuery",
        component: () => import("@/views/project/applyfor/new/index"),
        meta: {
          title: "申请查询",
          affix: false,
          noKeepAlive: true,
          permissions: ["tsc-location-inventory"],
        },
      },
    ],
  },
  {
    path: "/actue",
    component: Layout,
    redirect: "actue",
    name: "ActueQueryData",
    alwaysShow: false,
    meta: {
      title: "主数据",
      icon: "coins",
      permissions: ["tsc-master-data"],
    },
    children: [
      {
        path: "actueQuery",
        name: "ActueQuery",
        component: () => import("@/views/project/masterData/actue/index"),
        meta: {
          title: "样机查询",
          affix: false,
          noKeepAlive: true,
          icon: "coins",
          permissions: ["tsc-location-inventory"],
        },
      },
    ],
  },
  {
    path: "/MasterData",
    component: Layout,
    redirect: "actue",
    name: "Master",
    alwaysShow: true,
    meta: {
      title: "主数据",
      icon: "coins",
      permissions: ["tsc-master-data"],
    },
    children: [
      {
        path: "actue",
        name: "Actue",
        component: () => import("@/views/project/masterData/actue/index"),
        meta: {
          title: "样机管理",
          affix: false,
          noKeepAlive: true,
          permissions: ["tsc-location-inventory"],
        },
      },
    ],
  },
  {
    path: "/personalCenter",
    component: Layout,
    hidden: true,
    redirect: "personalCenter",
    children: [
      {
        path: "personalCenter",
        name: "PersonalCenter",
        component: () => import("@/views/personalCenter/index"),
        meta: {
          title: "个人中心",
        },
      },
    ],
  },
  {
    path: "/index.html",
    redirect: "/",
    hidden: true,
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  base: routerMode === "history" ? publicPath : "",
  mode: routerMode,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});
//注释的地方是允许路由重复点击，如果你觉得框架路由跳转规范太过严格可选择放开
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

export function resetRouter() {
  router.matcher = new VueRouter({
    base: routerMode === "history" ? publicPath : "",
    mode: routerMode,
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher;
}

export default router;
