import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import UserProfile from "../pages/UserProfile/UserProfile";
import EstateDetails from "../pages/EstateDetails/EstateDetails";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('/realEstate.json'),
        },
        {
          path: '/updateProfile',
          element: <UpdateProfile></UpdateProfile>
        },
        {
          path: '/userProfile',
          element: <UserProfile></UserProfile>
        },
        {
          path: '/estateDetails/:id',
          element: <EstateDetails></EstateDetails>,
          loader: async ({ params }) => {
            const response = await fetch('/realEstate.json'); 
            const data = await response.json();
            return data.find(item => item.id === parseInt(params.id));
          }

        },
      ]
    },
  ]);

  export default routes;