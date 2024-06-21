import RestaurantCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
import {useState} from "react";
const Body =() =>{
  let [listOfRestaurants, setListOfRestaurants] =useState(resObj);

  //  let  [listOfRestaurants, setListOfRestaurants] =useState(
  //   [
  //   {
  //         "info": {
  //           "id": "527591",
  //           "name": "Wow! Momo",
  //           "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
  //           "costForTwo": "₹300 for two",
  //           "cuisines": [
  //             "Tibetan",
  //             "Healthy Food",
  //             "Asian",
  //             "Chinese",
  //             "Snacks",
  //             "Continental",
  //             "Desserts",
  //             "Beverages"
  //           ],
  //           "avgRating": 4.2,
  //           "sla": {
  //             "deliveryTime": 36
  //           }
  //         }
  //       }, {"info": {
  //             "id": "527592",
  //             "name": " Momo",
  //             "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
  //             "costForTwo": "₹300 for two",
  //             "cuisines": [
  //               "Tibetan",
  //               "Healthy Food",
  //               "Asian",
  //               "Chinese",
  //               "Snacks",
  //               "Continental",
  //               "Desserts",
  //               "Beverages"
  //             ],
  //             "avgRating": 3,
  //             "sla": {
  //               "deliveryTime": 36
  //             }}}
  //  ]);

    // let listOfRestaurants = [{
    //     "info": {
    //       "id": "527591",
    //       "name": "Wow! Momo",
    //       "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
    //       "costForTwo": "₹300 for two",
    //       "cuisines": [
    //         "Tibetan",
    //         "Healthy Food",
    //         "Asian",
    //         "Chinese",
    //         "Snacks",
    //         "Continental",
    //         "Desserts",
    //         "Beverages"
    //       ],
    //       "avgRating": 4.2,
    //       "sla": {
    //         "deliveryTime": 36
    //       }
    //     }
    //   },  {"info": {
    //     "id": "527592",
    //     "name": " Momo",
    //     "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
    //     "costForTwo": "₹300 for two",
    //     "cuisines": [
    //       "Tibetan",
    //       "Healthy Food",
    //       "Asian",
    //       "Chinese",
    //       "Snacks",
    //       "Continental",
    //       "Desserts",
    //       "Beverages"
    //     ],
    //     "avgRating": 3,
    //     "sla": {
    //       "deliveryTime": 36
    //     }}
    //   }];

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