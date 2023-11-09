import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyOrderItemsCard from "../../Components/MyOrderItemsCard/MyOrderItemsCard";



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