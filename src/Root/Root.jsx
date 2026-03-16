import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Error from "./Error";
import Home from "../Main/Home";
import Apps from "../Components/AppPages/Apps";
import Instalations from "../Components/InstalationPages/Instalations";
import TrendingDetails from "../Components/TrendingApps/TrendingDetails";
import AppsDetails from "../Components/AppPages/AppsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: Main,
    children: [
      {
        index: true,
        Component: Home,
        loader:()=>fetch('appdatas.json'),
      },
      {
        path:"/apps",
        Component:Apps,
        loader:()=>fetch('appdatas.json')
      },
      {
        path:"/apps/:id",
        Component:AppsDetails,
        loader:()=>fetch('appdatas.json')
      },
      {
        path:"/installation",
        Component:Instalations
      },
      {
        path:"/trendingDetails/:id",
        loader:()=>fetch('appdatas.json'),
        Component:TrendingDetails
      },
     
    ],
  },
]);

export default router;
