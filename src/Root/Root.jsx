import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Error from "./Error";
import Home from "../Main/Home";

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
     
    ],
  },
]);

export default router;
