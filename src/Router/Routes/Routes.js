import { createBrowserRouter } from "react-router-dom";
import AllServices from "../../Components/AllServices/AllServices";
import Home from "../../Components/Home/Home";
import ServiceDetail from "../../Components/ServiceDetail/ServiceDetail";
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
      {
        path: "/servicedetail/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/servicesall/${params.id}`),
      },
    ],
  },
]);

export default router;
