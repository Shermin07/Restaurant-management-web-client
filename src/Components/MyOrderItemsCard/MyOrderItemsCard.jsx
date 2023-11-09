import React from 'react';
import Swal from 'sweetalert2';

const MyOrderItemsCard = ({items ,myItems, setMyItems}) => {

    const { _id,foodName,price, quantity,photo
     } = items ;

     const handleDelete = _id =>{
        // console.log(_id)
        Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed) {
         
             fetch(`http://localhost:5000/foodPurchase/${_id}`,{
                 method :'Delete'
             })
             .then(res =>res.json())
             .then(data => {
                 console.log(data)
                 if(data.deletedCount>0){
             Swal.fire(
            'Deleted!',
             'Your item has been deleted.',
             'success' )
             const remaining = myItems.filter(item => item._id !== _id)
             setMyItems(remaining) ;
                 }
             })
         }
       })
     }
    return (
        <div>
          <div className="card h-[450px] bg-base-100 shadow-xl">
  <figure className='h-56 object-cover'><img src={photo} alt="food" /></figure>
  <div className="card-body">
    <h2 className="card-title">Item: {foodName}</h2>
    <p>Price: {price}</p>
    <p>Quantity: {quantity}</p>
    <div className="card-actions justify-center">
      <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default MyOrderItemsCard;