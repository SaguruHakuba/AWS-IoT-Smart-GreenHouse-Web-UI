import React from "react";

import async from "../components/Async";

// Dashboards components
const Default = async(() => import("../pages/dashboard/Default"));

const dashboardsRoutes = {
    id: "Dashboard",
    path: "/dashboard",
    header: "Pages",
    icon: null,
    containsHome: true,
    children: [
        {
        path: "/dashboard/default",
        name: "Default",
        component: Default
        }
    ],
    component: null
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
    dashboardsRoutes
];

// Routes visible in the sidebar
export const sidebarRoutes = [
    dashboardsRoutes
  ];