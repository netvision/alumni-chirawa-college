// src/router/routes.js

const routes = [
  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "/", redirect: "/home" },
      { path: "home", component: () => import("src/pages/IndexPage.vue") },
      { path: "login", component: () => import("src/pages/LoginPage.vue") },
      {
        path: "register",
        component: () => import("src/pages/RegisterPage.vue"),
      },
      {
        path: "payment/:id",
        name: "payment",
        component: () => import("src/pages/PaymentPage.vue"),
        props: true,
      },
    ],
    meta: { auth: false },
  },
  {
    path: "/app",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ProfilePage.vue") }],
    meta: { auth: true },
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
