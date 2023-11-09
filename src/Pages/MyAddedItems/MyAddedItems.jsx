import { useLoaderData } from "react-router-dom";
import MyItems from "../../Components/MyItems/MyItems";
import { Helmet } from "react-helmet";


const MyAddedItems = () => {


    const myItems = useLoaderData();
    console.log(myItems)

    return (
       <div>
          <Helmet>
          <title>Retro Diner Delights | My Added Items</title>
        </Helmet>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                myItems?.map(items => <MyItems
                items = {items}
                
                key={myItems._id}>


                </MyItems>)
            }
        </div>
       </div>
    );
};

export default MyAddedItems;