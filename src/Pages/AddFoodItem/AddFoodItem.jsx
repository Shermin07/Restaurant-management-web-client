import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";


const AddFoodItem = () => {
const {user} = useContext(AuthContext)

    const handleAdded = e =>{
        e.preventDefault() ;

        const name = e.target.foodName.value ;
        const category = e.target.category.value ;
        const origin = e.target.origin.value ;
        const price = e.target.price.value ;
        const buyerName = e.target.buyerName.value ;
        const photo = e.target.foodURL.value ;
        const description = e.target.description.value ;
        const quantity = e.target.quantity.value ;

        console.log(name,buyerName, category, origin,photo,price,description,quantity) 

        const addItem = {
            name,
            category,
            origin,
            photo,
            quantity,
            price,
            description,
            buyerName
        }
        fetch('http://localhost:5000/addFoodItem',{
            method :'POST',
            headers :{
                'content-type' :'application/json'
            },
            body:JSON.stringify(addItem)
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
           <Helmet>
          <title>Retro Diner Delights | Add Food Item</title>
        </Helmet>
            
            <div className="hero-content bg-cyan-900  ">
   
   <div className="card  max-w-full ">
     <form onSubmit={handleAdded} className="">
        <h1 className="text-center mt-7 text-white text-xl font-semibold">You can add food items from here</h1>
      <div className="grid grid-cols-1 md:flex gap-4">
      <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Food Name</span>
         </label>
         <input type="text" placeholder="Food Name" name="foodName" className="input w-[300px]  input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label ">
           <span className="label-text text-white">Category</span>
         </label>
         <input type="text" placeholder="Category" name="category" className="input w-[300px] input-bordered" required />
       </div>
      </div>
      <div className="grid grid-cols-1 md:flex gap-4">
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
      <div className="grid grid-cols-1 md:flex gap-4">
      <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Origin</span>
         </label>
         <input type="text" placeholder="Origin" name='origin'className="input  w-[300px] input-bordered" required />
       
       </div>
      <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Description</span>
         </label>
         <input type="text" placeholder="Description" name="description" className="input  w-[300px] input-bordered" required />
        
       </div>
      </div>
      <div className="grid grid-cols-1 md:flex gap-4">
      <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Photo</span>
         </label>
         <input type="text" placeholder="PhotoURL" name='foodURL'className="input  w-[300px] input-bordered" required />
       
       </div>
      <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Price</span>
         </label>
         <input type="text" placeholder="Price $" name="price" className="input  w-[300px] input-bordered" required />
        
       </div>
      </div>






       <div className="form-control mt-6">
         <button type="submit" className="btn ">Please Add</button>
       </div>
     </form>
   </div>
 </div>
        </div>
    );
};

export default AddFoodItem;