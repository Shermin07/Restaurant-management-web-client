import { useEffect, useState } from "react";
import TopFoodSectionCard from "../TopFoodSectionCard/TopFoodSectionCard";
import { Link } from "react-router-dom";


const TopFoodSection = () => {
   
    const [topItems, setTopItems] = useState();
      
    //console.log(topItems)

    useEffect(() =>{
        fetch('http://localhost:5000/foodItems')
        .then(res =>res.json())
        .then(data =>{
            //console.log(data)
            setTopItems(data)
        })
    }
    
    
    
    ,[])
   

    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-24 mb-10">Top Food Section</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">


{
    topItems?.map(topItem => 
    <TopFoodSectionCard key={topItem._id} topItem={topItem}>

    </TopFoodSectionCard>)
}
</div>
<Link to='/allFoodItems' className="text-center text-xl lg:pl-[600px]">See All</Link>
        </div>
    );
};

export default TopFoodSection;