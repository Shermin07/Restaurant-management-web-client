


import { Helmet } from "react-helmet";
import {  Link, useLoaderData } from "react-router-dom";


const SingleFoodPage = () => {
  
  const singleFoodData = useLoaderData()
  console.log(singleFoodData)

  
 return (
        <div>
           <Helmet>
            <title>Retro Diner Delights | Single Food Page</title>
          </Helmet>
          <h1 className="text-center font-bold text-3xl mb-5 mt-3 text-green-800">Featured Dish of the Day</h1>
      <div className="card card-compact mt-8 bg-base-100 shadow-xl">
        <figure><img src={singleFoodData.foodImage} alt="Shoes" /></figure>
        <div className="card-body font-semibold text-xl text-center">
          <h2 className=" font-semibold text-2xl text-center">Item Name: {singleFoodData.foodName}</h2>
          <p>Category: {singleFoodData.foodCategory}</p>
          <p>Food Origin: {singleFoodData.foodOrigin
}</p>
          <p>Made By: {singleFoodData.madeBy}</p>
          <p>Price: {singleFoodData.price} $</p>
          <p>Description: {singleFoodData.description}</p>
          <div className="card-actions justify-center">
            <Link to='/foodPurchase' className="btn">Order Now</Link>
           
          </div>
        </div>
      </div>
        </div>
    );
};

export default SingleFoodPage;