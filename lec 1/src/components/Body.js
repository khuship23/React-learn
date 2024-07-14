import RestaurantCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./shimmer";

const Body =() =>{
 const [listOfRestaurants, setListOfRestaurants] =useState(resObj);
 const [searchText , setSearchTxt] = useState("");
 const[FilteredListOfRes, setFilteredRes]=useState([]);
//  whenever state variables updates, react triggers a reconciliation cycle(rerenders the components)
  useEffect(()=>{
    console.log("useeffect called");
    fetchData();
  }, []); 

  const fetchData = async() =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
   
const json = await data.json();
console.log(json);
setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
// cors extension is used 

  //conditional rendering
  // if (listOfRestaurants.length === 0){
  //   return <Shimmer/>;
  // }

    return listOfRestaurants.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
             <div className="search">
              <input type="text"className="searchBox" value={searchText}
              onChange={(e)=>{
                setSearchTxt(e.target.value);
              }}/>
              <button onClick={()=>{
                console.log("list :", listOfRestaurants)
                console.log(searchText)
             const filteredRes =listOfRestaurants.filter((info)=>{
              return info?.info?.name.toLowerCase().includes(searchText.toLowerCase())})
              console.log(filteredRes)
              setFilteredRes(filteredRes);

              }
            }>Search</button>
              </div> 
                <button className="filter-btn" 
                onClick={()=>{
                  
                 const filteredList = listOfRestaurants.filter((info) =>{
                    return info.info.avgRating > 4.3
                  })
                  setFilteredRes(filteredList);
                }}>
                Top Rate Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* passing props to a functional components  */}
              {
                FilteredListOfRes?.map((info )=> (
                  <RestaurantCard key={info.info.id} resData={info}/>
                  ))

              }
             
               {/* //props = property  , normal arguments to function */}
            </div>
        </div>
    )
};
export default Body;