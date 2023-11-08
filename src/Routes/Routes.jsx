import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Blog from "../Pages/Blog/Blog";
import Root from "../Root/Root";
import SingleFoodPage from "../Pages/SingleFoodPage/SingleFoodPage";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFoodItem from "../Pages/AddFoodItem/AddFoodItem";
import MyAddedItems from "../Pages/MyAddedItems/MyAddedItems";
import MyOrderedItems from "../Pages/MyOrderedItems/MyOrderedItems";

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
        },
        {
          path:'/singleFoodPage/:id',
          element:<SingleFoodPage></SingleFoodPage>,
        
    loader: ({params}) => fetch(`http://localhost:5000/allFoodItems/${params.id}`)
        },
        {
          path: '/foodPurchase',
          element: <FoodPurchase></FoodPurchase>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addAFoodItem',
          element:<AddFoodItem></AddFoodItem>
        },
        {
         path:'/MyaddedItems',
         element:<MyAddedItems></MyAddedItems>,
         loader : () => fetch('http://localhost:5000/addFoodItem')
        },
        {
          path: '/myOrderedItems',
          element:<MyOrderedItems></MyOrderedItems>
        }
      ]
    },
  ]);