import Marquee from "react-fast-marquee";

const MostSellingItem = () => {
    return (
        <div>

            <h1 className="text-center text-3xl font-bold mt-10 mb-4">Most Selling Food Items</h1>
           <Marquee >
           <div className="flex gap-7">
           <div>
                <h1 className="text-center font-bold">Tom Yum Soup</h1>
                <img className="h-72" src="https://img.freepik.com/free-photo/thai-food-tom-yum-seafood-seafood-spicy-soup_1150-38147.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=ais"></img>
            </div> 
            <div>
                <h1 className="text-center font-bold">Bruschetta</h1>
                <img className="h-72" src="https://img.freepik.com/free-photo/tapas-appetizers_144627-20863.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=sph"></img>
            </div>
            <div>
                <h1 className="text-center font-bold">Hawaiian Pizza</h1>
                <img className="h-72" src="https://img.freepik.com/premium-photo/pizza-cut-slices_661031-309.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=ais"></img>
            </div>
            <div>
                <h1 className="text-center font-bold">Ceviche</h1>
                <img className="h-72" src="https://img.freepik.com/free-photo/mexican-food-ai-generated-image_511042-1770.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=sph"></img>
            </div>
            <div>
                <h1 className="text-center font-bold">Salmon Teriyaki</h1>
                <img className="h-72" src="https://img.freepik.com/free-photo/grilled-salmon-fillet-with-asparagus-broccoli-generated-by-ai_188544-18288.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=ais"></img>
            </div>
           </div>
            </Marquee> 
        </div>
    );
};

export default MostSellingItem;