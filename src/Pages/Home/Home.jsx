import { Outlet } from "react-router-dom";
import Navber from "../../Components/Navber/Navber";
import Banner from "../../Components/Banner/Banner";
import TopFoodSection from "../../Components/TopFoodSection/TopFoodSection";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <TopFoodSection></TopFoodSection>
         <Outlet></Outlet>
        </div>
    );
};

export default Home;