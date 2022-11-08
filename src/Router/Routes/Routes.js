import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Components/AddService/AddService";
import AllServices from "../../Components/AllServices/AllServices";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default router;
