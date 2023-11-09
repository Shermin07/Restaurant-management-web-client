/* eslint-disable react-hooks/exhaustive-deps */

import { useLoaderData } from "react-router-dom";
import AllFoodItemsCard from "../../Components/AllFoodItemsCards/AllFoodItemsCard";
import { useEffect, useState } from "react";


const AllFoodItems = () => {

   
   
   const [allFoodItems, setAllFoodItems] = useState([]);
 const [itemPerPage, setItemPerPage] = useState(9);
 const [currentPage, setCurrentPage] = useState(0);
 const [pages, setPages] = useState([]);

  // paginations
   // Calculate the total number of pages
   // const numberOfPage = Math.ceil(allFoodItems.length/itemPerPage) ;
   //console.log(numberOfPage)
   
   
  

    useEffect( () =>{
        fetch(`http://localhost:5000/allFoodItems?page=${currentPage}&size=${itemPerPage}`)
        .then(res => res.json())
        .then(data =>{
            setAllFoodItems(data)
           //console.log(data)
            const pagesCount = Math.ceil(data.length / itemPerPage);
            console.log(pagesCount)
            setPages(Array.from({ length: pagesCount }, (_, index) => index));
          

        })
    }  ,[currentPage,itemPerPage])
   // console.log(pages)

     const handleItemsPerPage = e =>{

        const val = parseInt(e.target.value)
        console.log(val);
        setItemPerPage(val)
        setCurrentPage(0)
     }
  const handlePrevious = () =>{
    if(currentPage >0){
        setCurrentPage(currentPage-1)
    }
  }

  const handleNext = () =>{
    if(currentPage < pages.length){
        setCurrentPage(currentPage+1)
    }
  }
   
    return (
       <div>
        <h1 className="text-center font-bold text-4xl mb-6 text-green-700">Delightful Dining Choices </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
  allFoodItems?.map(allFoodItem => <AllFoodItemsCard key={allFoodItem._id}
    allFoodItem = {allFoodItem}
    ></AllFoodItemsCard>)
            }
        </div>

      
        
    <div className="pagination mt-12 pl-[100px] md:pl-[300px] lg:pl-[450px] xl:pl-[500px]">
   
    <button onClick={handlePrevious} className="mr-3 border rounded-md bg-black text-white px-1">previous</button>
    {
    pages.map(page => <button className={currentPage === page && 'selected border-2 px-1 mx-4 bg-black text-white' }
        onClick={() => setCurrentPage(page)}  
     key ={page}>
      {page}
    </button>)
 }
 <button onClick={handleNext} className="ml-3 mr-2 border rounded-md bg-black text-white px-1">next</button>

   <select value={itemPerPage}  onChange={handleItemsPerPage}>    
  <option className='mr-2' value='9'>9</option>
  <option value='9'>9</option>
  <option value='9'>9</option>
  <option value='9'>9</option>

   </select>
    </div>

       
           

 
 
</div>

      
    );
};

export default AllFoodItems;
