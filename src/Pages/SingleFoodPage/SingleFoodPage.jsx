import { useEffect, useState } from "react";

import SingleFoodCom from "../../Components/SingleFoodCom/SingleFoodCom";
import {  useLoaderData, useParams } from "react-router-dom";


const SingleFoodPage = () => {
  
  const singleFoodData = useLoaderData()
  console.log(singleFoodData)

  
 return (
        <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={singleFoodData.foodImage} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SingleFoodPage;