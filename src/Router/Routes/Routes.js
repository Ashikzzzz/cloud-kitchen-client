import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Components/AddService/AddService";
import AllReview from "../../Components/AllReview/AllReview";
import AllServices from "../../Components/AllServices/AllServices";
import Blog from "../../Components/Blog/Blog";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import MyReview from "../../Components/MyReview/MyReview";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import Register from "../../Components/Register/Register";
import Review from "../../Components/Review/Review";
import ServiceDetail from "../../Components/ServiceDetail/ServiceDetail";
import Update from "../../Components/Update/Update";

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
      {
        path: "/allreview",
        element: <AllReview></AllReview>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviewsemail/${params.id}`),
      },
      {
        path: "/review/:id",
        element: <Review></Review>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/servicesall/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
