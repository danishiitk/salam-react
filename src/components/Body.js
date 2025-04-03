import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [resList, setResList] = useState(restaurantsList);
  const handleFilterBtn = () => {
    const filteredList = resList.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );
    setResList(filteredList);
  };
  return (
    <div className="app-body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterBtn}>
          Top rated Restaurants!
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resName={restaurant.info.name}
            deliveryTime={restaurant.info.sla.deliveryTime}
            cuisines={restaurant.info.cuisines}
            cloudinaryImageId={restaurant.info.cloudinaryImageId}
            avgRating={restaurant.info.avgRating}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
