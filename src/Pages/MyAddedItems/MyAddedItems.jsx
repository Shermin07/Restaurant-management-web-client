import { useLoaderData } from "react-router-dom";
import MyItems from "../../Components/MyItems/MyItems";


const MyAddedItems = () => {


    const myItems = useLoaderData();
    console.log(myItems)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                myItems?.map(items => <MyItems
                items = {items}
                
                key={myItems._id}>


                </MyItems>)
            }
        </div>
    );
};

export default MyAddedItems;