import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Blog from "../Pages/Blog/Blog";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
          path:'/allFoodItems',
          element:<AllFoodItems></AllFoodItems>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    },
  ]);