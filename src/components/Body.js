import { useMemo, useState, useCallback } from "react";
import useRestaurantList from "../utils/hooks/useRestaurantList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
  const online = useOnlineStatus();
  const { restaurants, city, error, lat, long } = useRestaurantList();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState(null);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const filteredList = useMemo(() => {
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

    return list;
  }, [restaurants, searchQuery, filter]);

  if (!online) return <div role="alert">Please connect to Internet!</div>;

  return (
    <main className="app-body">
      {error ? (
        <div className="error" role="alert">
          {error}
        </div>
      ) : filteredList.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <section className="body-top-row">
            <button
              className="filter-btn"
              onClick={() => setFilter("topRated")}
              aria-pressed={filter === "topRated"}
            >
              Top rated restaurants
            </button>
            {filter && (
              <button className="filter-btn" onClick={() => setFilter(null)}>
                Clear filter
              </button>
            )}
            <div>{city}</div>
            <div className="search">
              <input
                type="text"
                value={searchQuery}
                placeholder="Search by name or cuisine"
                onChange={handleSearchChange}
                aria-label="Search Restaurants"
              />
              <button className="search-btn" disabled={!searchQuery.trim()}>
                Search
              </button>
            </div>
          </section>

          <section className="res-container">
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
          </section>
        </>
      )}
    </main>
  );
};

export default Body;
