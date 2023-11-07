import { Link } from "react-router-dom";


const AllFoodItemsCard = ({allFoodItem}) => {

    const {_id,foodName,foodImage,foodCategory,price,quantity} = allFoodItem ;
    return (
      <div>
          <div className="card card-compact h-[450px] bg-base-100 shadow-xl">
        <figure className="h-64 object-cover"><img src={foodImage}alt="Food" /></figure>
        <div className="card-body">
          <h2 className="card-title">Items Name:{foodName}</h2>
          <p className="text-lg font-medium">Category: {foodCategory}</p>
          <p  className="text-lg font-medium"> Price: {price}$</p>
          <div className="card-actions justify-center">
            <Link to={`/singleFoodPage/${_id}`} className="btn">Details</Link>
          
          </div>
        </div>
      </div>
      
      </div>
    );
};

export default AllFoodItemsCard;