

import Banner from "../../Components/Banner/Banner";

import MostSellingItem from "../../Components/MostSellingItem/MostSellingItem";
import Reviews from "../../Components/Reviews/Reviews";
import TopFoodSection from "../../Components/TopFoodSection/TopFoodSection";

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <TopFoodSection></TopFoodSection>
            <MostSellingItem></MostSellingItem>
            <Reviews></Reviews>
          
        </div>
       
    );
};

export default Home;