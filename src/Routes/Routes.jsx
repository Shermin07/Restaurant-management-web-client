import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Blog from "../Pages/Blog/Blog";
import Root from "../Root/Root";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[

        {
          path: '/',
          element: <Home></Home>

        },
        {
          path:'/allFoodItems',
          element:<AllFoodItems></AllFoodItems>,
          loader: () => fetch('http://localhost:5000/allFoodItems')
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    },
  ]);