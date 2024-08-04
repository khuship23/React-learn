import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  console.log(resId);

  useEffect(() => {
    FetchMenu();
  }, [resId]);

  const FetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId
      // `${MENU_API}${resId}`
      //  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=10575"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };
  //   resInfo?.data.cards[2].card.card.info.name
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { cuisines, name, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      .card || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
      <ul classname="unordered">
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
