import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyOrderItemsCard from "../../Components/MyOrderItemsCard/MyOrderItemsCard";
import { Helmet } from "react-helmet";



const MyOrderedItems = () => {

  const [myItems, setMyItems] = useState()
  console.log(myItems)
 
  useEffect(() =>{
    fetch('http://localhost:5000/foodPurchase')
    .then(res => res.json())
    .then(data =>{
        //console.log(data)
        setMyItems(data)
    })
  },[])
    return (
        <div>
              <Helmet>
          <title>Retro Diner Delights | My Ordered Items</title>
        </Helmet>
            <h1 className="text-center text-3xl font-bold text-green-800 mt-3 mb-5">My Cart</h1>
       <div className="grid grid-cols-1 md:grid  lg:grid-cols-3 gap-4">
        {
            myItems?.map(items => <MyOrderItemsCard key={items._id}
            items = {items}
            myItems = {myItems}
            setMyItems = {setMyItems}

            
            
            >


            </MyOrderItemsCard>)
        }
       </div>
        </div>
    );
};

export default MyOrderedItems;