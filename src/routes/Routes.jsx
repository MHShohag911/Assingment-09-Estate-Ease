import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import UserProfile from "../pages/UserProfile/UserProfile";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";
import { UpdateProfile } from "../pages/UpdateProfile/UpdateProfile";
import Contact from "../pages/Contact/Contact";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('/realEstate.json'),
        },
        {
          path: '/updateProfile',
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path: '/userProfile',
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path: '/estateDetails/:id',
          element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
          loader: async ({ params }) => {
            const response = await axios.get('/realEstate.json'); 
            const data = await response.data;
            return data.find(item => item.id === parseInt(params.id));
          }
        },
        {
          path: '/contact',
          element: <PrivateRoute><Contact></Contact></PrivateRoute>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
      ]
    },
  ]);

  export default routes;