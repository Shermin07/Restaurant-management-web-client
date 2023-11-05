import { Link } from "react-router-dom";


const TopFoodSectionCard = ({topItem}) => {

    const {foodName,foodImage,foodCategory,price} = topItem ;
    return (
        <div className="card card-compact  shadow-xl">
        <figure className="h-72 object-cover"><img src={foodImage} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{foodName}</h2>
          <h2 className="card-title">{foodCategory}</h2>
         
          <div className="card-actions justify-start">
            <Link to='/allFoodItems' className="underline btn text-md font-bold">Details</Link>
          </div>
        </div>
      </div>
    );
};

export default TopFoodSectionCard;