import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Error from "./Error";
import Home from "../Main/Home";
import Apps from "../Components/AppPages/Apps";
import Instalations from "../Components/InstalationPages/Instalations";
import TrendingDetails from "../Components/TrendingApps/TrendingDetails";
import AppsDetails from "../Components/AppPages/AppsDetails";

import InstallApps from "../Components/InstalationPages/InstallApps";

const router = createBrowserRouter([
  {
    path: "/",

    Component: Main,
    errorElement:<Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/appdatas.json"),

        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appdatas.json"),
        Component: Apps,
      },
      {
        path: "/apps/:id",
        loader: () => fetch("/appdatas.json"),
        Component: AppsDetails,
        errorElement:<Error></Error>,
      },
      {
        path: "/installation",
        Component: Instalations,
        loader:()=>fetch('/appdatas.json')
      },
      
      {
        path: "/trendingDetails/:id",
        loader: () => fetch("/appdatas.json"),
        Component: TrendingDetails,
      },
    ],
  },
]);

export default router;
