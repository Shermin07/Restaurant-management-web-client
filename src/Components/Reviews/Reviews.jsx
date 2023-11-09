



const Reviews = () => {


  
    return (
        
      <div>
        <h1 className="text-center text-3xl mt-12 mb-4 font-bold">Best Reviews</h1>
          <div className="lg:flex gap-4 grid grid-cols-1">
       
       <div className="md:h-[580px] lg:h-[400px]   border-2">
   <figure className="px-10 pt-10">
     <img   src="https://img.freepik.com/free-photo/grilled-salmon-fillet-with-asparagus-broccoli-generated-by-ai_188544-18288.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=ais" alt="Shoes" className="rounded-lg pl-11 md:h-[56] lg:h-32" />
   </figure>
   <div className="card-body items-center text-center">
     <h2 className="card-title">Item: Salmon Teriyaki</h2>
     <p>Price : 14.99 $</p>
     <p>Sweet and savory; tender salmon in a glossy, umami-rich teriyaki sauce. A delightful dish.</p>
     <div className="card-actions">
     <div className="rating">
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 </div>
     </div>
   </div>
 </div>
       <div className="md:h-[580px] lg:h-[400px]   border-2">
   <figure className="px-10 pt-10">
     <img src="https://img.freepik.com/free-photo/arabic-kebab-sandwich-top-view_23-2148651073.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=ais" alt="Shoes" className="rounded-xl pl-11 md:h-[56] lg:h-32" />
   </figure>
   <div className="card-body items-center text-center">
     <h2 className="card-title">Item: Gyros Platter</h2>
     <p>Price : 12.99 $</p>
     <p>Hearty, seasoned meat slices, served with pita, veggies, and tzatziki. A satisfying, flavorful meal.</p>
     <div className="card-actions">
     <div className="rating">
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 </div>
     </div>
   </div>
 </div>
       <div className=" md:h-[580px] lg:h-[400px]   border-2">
   <figure className="px-10 pt-10">
     <img src="https://img.freepik.com/free-photo/grilled-salmon-fillet-with-asparagus-broccoli-generated-by-ai_188544-18288.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=ais" alt="Shoes" className="rounded-xl pl-11 md:h-[56] lg:h-32" />
   </figure>
   <div className="card-body items-center text-center">
     <h2 className="card-title">Item: Mango Sticky Rice</h2>
     <p>Price : 9.50 $</p>
     <p> Sweet, aromatic mango slices atop coconut-infused sticky rice, a delectable Thai dessert.</p>
     <div className="card-actions">
     <div className="rating">
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 </div>
     </div>
   </div>
 </div>
         </div>
      </div>
    );
};

export default Reviews;