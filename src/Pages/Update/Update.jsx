import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const Update = () => {
    const {user} = useContext(AuthContext) ;
    //const [updated, setUpdated] = useState([]);

   // const url = `http://localhost:5000/addFoodItem?email=${user?.email}`

  const updateItem = useLoaderData([])
  const {_id,foodName,price,category,email,origin,photo} = updateItem;

  console.log(updateItem)


    const handleUpdate = e =>{
        e.preventDefault()  ;

        const foodName = e.target.foodName.value ;
        const price = e.target.price.value ;
        const category = e.target.category.value ;
        const email = e.target.email.value ;
        const origin = e.target.origin.value ;
        const photo = e.target.photo.value ;

        console.log(foodName,price,category,email,origin,photo)

        const updatedItem = {
            foodName,
            price,
            category,
            email,
            origin,
            photo
         

        }

        // Update here

        fetch(`http://localhost:5000/addFoodItem/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount>0){
                new Swal('Your item is updated')
            }
        })



    }

    return (
        <div>
           <div className="hero-content bg-green-900  ">
   
   <div className="card  max-w-full ">
     <form onSubmit={handleUpdate}  className="">
      <div className="flex gap-4">
      <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Food Name</span>
         </label>
         <input type="text" placeholder="Food Name" name="foodName" className="input w-[300px]  input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label ">
           <span className="label-text text-white">Price</span>
         </label>
         <input type="text" placeholder="Price" name="price" defaultValue={'$'} className="input w-[300px] input-bordered" required />
       </div>
      </div>
      <div className="flex gap-4">
      <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Quantity</span>
         </label>
         <input type="text" placeholder="Quantity" name="quantity" className="input  w-[300px] input-bordered" required />
       
       </div>
      <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Category</span>
         </label>
         <input type="text" placeholder="Catergory"   
         name='category'className="input  w-[300px] input-bordered" required />
        
       </div>
      </div>
      <div className="flex gap-4">
      <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Buyer Email</span>
         </label>
         <input type="email" placeholder="Email" name='email'className="input  w-[300px] input-bordered" required />
       
       </div>
      <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Food Origin</span>
         </label>
         <input type="text" placeholder="Origin" name="origin" className="input  w-[300px] input-bordered" required />
        
       </div>
      </div>
      <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Photo</span>
         </label>
         <input type="text" placeholder="Photo" name="photo" className="input  w-[610px] input-bordered" required />
        
       </div>






       <div className="form-control mt-6">
         <button type="submit" className="btn ">Updated</button>
       </div>
     </form>
   </div>
 </div>
        </div>
    );
};

export default Update;