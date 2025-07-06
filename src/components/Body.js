import { useState, useEffect } from "react";
import { SWIGGY_API, SWIGGY_API_PROXY } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantsList } from "../utils/mockdata";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [originalList] = useState(restaurantsList);

  const filterRestaurants = () => {
    const filteredList = originalList.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );
    setResList(filteredList);
  };
  useEffect(() => {
    // Simulate API fetch with timeout (runs only once)
    const timer = setTimeout(() => {
      setResList(restaurantsList);
    }, 2000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []); // ✅ empty array → run only once after mount
  return (
    <div className="app-body">
      <div className="filter">
        <button className="filter-btn" onClick={filterRestaurants}>
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.length === 0 ? (
          <Shimmer />
        ) : (
          resList.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              resName={restaurant.info.name}
              deliveryTime={restaurant.info.sla.deliveryTime}
              cuisines={restaurant.info.cuisines}
              cloudinaryImageId={restaurant.info.cloudinaryImageId}
              avgRating={restaurant.info.avgRating}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
