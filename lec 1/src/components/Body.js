import RestaurantCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
const Body =() =>{

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{}}>
                Top Rate Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* passing props to a functional components  */}
              {
                resObj.map((info )=> (
                  <RestaurantCard key={info.info.id} resData={info}/>
                  ))

              }
             
               {/* //props = property  , normal arguments to function */}
            </div>
        </div>
    )
};
export default Body;