import { Link } from "react-router-dom";


const MyItems = ({items}) => {
    const {_id,name,category,origin,photo,price} = items ;
    return (
        <div>
           <div className="card bg-slate-200 mx-3 h-[450px] card-compact  ">
  <figure className="h-[300px] object-cover"><img src={photo} alt="Food" /></figure>
  <div className="card-body">
    <h2 className="font-semibold text-lg">Item: {name}</h2>
    <h2 className="font-semibold">Category: {category}</h2>
    <p className="font-semibold">Origin: {origin}</p>
    <p className="font-semibold">Price: {price} $</p>
    <div className="card-actions justify-center">
        <Link to={`/update/${_id}`} className="btn">Update</Link>
     
    </div>
  </div>
</div> 
        </div>
    );
};

export default MyItems;
