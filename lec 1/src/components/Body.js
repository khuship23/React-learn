import RestaurantCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
import {useEffect, useState} from "react";
const Body =() =>{
  let [listOfRestaurants, setListOfRestaurants] =useState(resObj);
 
  useEffect(()=>{
    console.log("useeffect called");
  }, []); 

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                  
                 const filteredList = listOfRestaurants.filter((info) =>{
                    return info.info.avgRating > 4.5
                  })
                  console.log(listOfRestaurants);
                  setListOfRestaurants(filteredList);
                }}>
                Top Rate Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* passing props to a functional components  */}
              {
                listOfRestaurants.map((info )=> (
                  <RestaurantCard key={info.info.id} resData={info}/>
                  ))

              }
             
               {/* //props = property  , normal arguments to function */}
            </div>
        </div>
    )
};
export default Body;