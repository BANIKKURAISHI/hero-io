import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Error from "./Error";
import Home from "../Main/Home";
import Apps from "../Components/AppPages/Apps";
import Instalations from "../Components/InstalationPages/Instalations";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: Main,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"/apps",
        Component:Apps
      },
      {
        path:"/installation",
        Component:Instalations
      },
     
    ],
  },
]);

export default router;
