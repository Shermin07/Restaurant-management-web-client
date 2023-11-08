

import Banner from "../../Components/Banner/Banner";

import MostSellingItem from "../../Components/MostSellingItem/MostSellingItem";
import TopFoodSection from "../../Components/TopFoodSection/TopFoodSection";

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <TopFoodSection></TopFoodSection>
            <MostSellingItem></MostSellingItem>
          
        </div>
       
    );
};

export default Home;