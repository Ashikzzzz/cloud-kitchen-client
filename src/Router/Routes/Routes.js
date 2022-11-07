import { createBrowserRouter } from "react-router-dom";
import AllServices from "../../Components/AllServices/AllServices";
import Home from "../../Components/Home/Home";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allService",
        element: <AllServices></AllServices>,
      },
    ],
  },
]);

export default router;
