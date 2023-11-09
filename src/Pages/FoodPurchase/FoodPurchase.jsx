import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const FoodPurchase = () => {
    const {user} = useContext(AuthContext)
    //console.log(user)


    const handlePurchase = e =>{
        e.preventDefault() ;

       const foodName = e.target.foodName.value ; 
       const price = e.target.price.value ; 
       const quantity = e.target.quantity.value ; 
       const buyerName = user?.buyerName ; 
       const photo = e.target.photo.value  ; 
       const email = user?.email; 

       const date = e.target.date.value ; 
       console.log(foodName,photo,price,quantity,buyerName,email, date )

       const purchaseItem = {
        foodName,
        price,
        quantity,
        buyerName,
        email,
        date ,
        photo


       }
       console.log(purchaseItem)


       fetch('http://localhost:5000/foodPurchase',{
        method :'POST',
        headers :{
            'content-type' :'application/json'
        },
        body:JSON.stringify(purchaseItem)
       })
       .then(res => res.json())
       .then(data =>{

        if(data.insertedId){
           new Swal('Order Successfully Done')
        }
       // console.log(data)
       })

    }

    return (
        <div>
        
  <div className="hero-content bg-green-900  ">
   
    <div className="card  max-w-full ">
      <form onSubmit={handlePurchase} className="">
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
          <input type="text" placeholder="Price" name="price" className="input w-[300px] input-bordered" required />
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
            <span className="label-text text-white">Buyer Name</span>
          </label>
          <input type="text" placeholder="Buyer Name" defaultValue ={user?.displayName}  
          name='buyerName'className="input  w-[300px] input-bordered" required />
         
        </div>
       </div>
       <div className="flex gap-4">
       <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Buyer Email</span>
          </label>
          <input type="email" placeholder="Email" defaultValue={user?.email} name='email'className="input  w-[300px] input-bordered" required />
        
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Buyer Date</span>
          </label>
          <input type="date" placeholder="Date" name="date" className="input  w-[300px] input-bordered" required />
         
        </div>
       </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Photo</span>
          </label>
          <input type="text" placeholder="Photo" name="photo" className="input  w-[400px] input-bordered" required />
         
        </div>






        <div className="form-control mt-6">
          <button type="submit" className="btn ">Purchase</button>
        </div>
      </form>
    </div>
  </div>

        </div>
    );
};

export default FoodPurchase;