import { useLoaderData } from "react-router-dom";
import AllFoodItemsCard from "../../Components/AllFoodItemsCards/AllFoodItemsCard";


const AllFoodItems = () => {

    const allFoodItems = useLoaderData() ;
    console.log(allFoodItems)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            allFoodItems?.map(allFoodItem => <AllFoodItemsCard key={allFoodItem._id}
            allFoodItem = {allFoodItem}
            ></AllFoodItemsCard>)
        }
        </div>
    );
};

export default AllFoodItems;