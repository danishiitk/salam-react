import { useEffect, useState } from "react";
import { SWIGGY_API, SWIGGY_API_PROXY } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  console.log("Body Rendered");
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filterRestaurants = () => {
    const filteredList = resList.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );
    setFilteredList(filteredList);
  };
  const fetchRestaurants = async () => {
    const response = await fetch(SWIGGY_API);
    const data = await response.json();
    const restaurants =
      data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setResList(restaurants);
    setFilteredList(restaurants);
  };
  const searchRestaurants = (query) => {
    if (!query) {
      return;
    }
    const searchedRestaurants = resList.filter((restaurant) => {
      const { id, name, cuisines } = restaurant.info;
      return (
        id.toString().includes(query) ||
        name.toLowerCase().includes(query.toLowerCase()) ||
        cuisines.join(", ").toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredList(searchedRestaurants);
  };
  useEffect(() => {
    fetchRestaurants();
  }, []); // ✅ empty array → run only once after mount
  return (
    <div className="app-body">
      <div className="body-top-row">
        <button className="filter-btn" onClick={filterRestaurants}>
          Top rated restaurants
        </button>
        <button onClick={() => setFilteredList(resList)}>
          All Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search by name or cuisine"
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search Restaurants"
          />
          <button
            className="search-btn"
            onClick={() => searchRestaurants(searchQuery.trim())}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {resList.length === 0 ? (
          <Shimmer />
        ) : (
          filteredList.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              id={restaurant.info.id}
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
