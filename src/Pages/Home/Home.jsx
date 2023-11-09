

import Banner from "../../Components/Banner/Banner";

import MostSellingItem from "../../Components/MostSellingItem/MostSellingItem";
import Reviews from "../../Components/Reviews/Reviews";
import TopFoodSection from "../../Components/TopFoodSection/TopFoodSection";
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
          <Helmet>
            <title>Retro Diner Delights | Home</title>
          </Helmet>
            <Banner></Banner>
            <TopFoodSection></TopFoodSection>
            <MostSellingItem></MostSellingItem>
            <Reviews></Reviews>
          
        </div>
       
    );
};

export default Home;