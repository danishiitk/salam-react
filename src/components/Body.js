import { useMemo, useState } from "react";
import useRestaurantList from "../utils/hooks/useRestaurantList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("[Body] Component rendered");

  const { restaurants, city, error, lat, long } = useRestaurantList();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState(null);

  const filteredList = useMemo(() => {
    console.log(
      "[Body] Filtering restaurants with query:",
      searchQuery,
      "and filter:",
      filter
    );

    let list = restaurants;
    if (filter === "topRated") {
      list = list.filter((r) => r.info.avgRating >= 4.5);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        ({ info }) =>
          info.id.toString().includes(q) ||
          info.name.toLowerCase().includes(q) ||
          info.cuisines.join(", ").toLowerCase().includes(q)
      );
    }

    console.log("[Body] Filtered list length:", list.length);
    return list;
  }, [restaurants, searchQuery, filter]);
  console.log("[Body] before return", filteredList);
  return (
    <div className="app-body">
      {error ? (
        <div className="error">{error}</div>
      ) : filteredList.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="body-top-row">
            <button
              className="filter-btn"
              onClick={() => setFilter("topRated")}
            >
              Top rated restaurants
            </button>
            <div>{city}</div>
            <div className="search">
              <input
                type="text"
                value={searchQuery}
                placeholder="Search by name or cuisine"
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search Restaurants"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
          <div className="res-container">
            {filteredList.map((restaurant) => (
              <RestaurantCard
                key={restaurant.info.id}
                id={restaurant.info.id}
                resName={restaurant.info.name}
                deliveryTime={restaurant.info.sla.deliveryTime}
                cuisines={restaurant.info.cuisines}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                avgRating={restaurant.info.avgRating}
                lat={lat}
                long={long}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
