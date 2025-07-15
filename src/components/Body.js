import { useCallback, useState, useEffect } from "react";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useRestaurantList from "../utils/hooks/useRestaurantList";
import RestaurantCard, { isGoodRestaurant } from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const online = useOnlineStatus();
  const { restaurants, city, error, lat, long } = useRestaurantList();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState(restaurants);
  const [topResFilter, setTopResFilter] = useState(false);

  const GoodRestaurant = isGoodRestaurant(RestaurantCard);
  useEffect(() => {
    setFilteredList(restaurants);
  }, [restaurants]);

  const handleTopResFilter = () => {
    const topRestaurants = filteredList.filter((r) => r.info.avgRating >= 4.5);
    setFilteredList(topRestaurants);
    setTopResFilter(true);
  };
  const handleSearchSubmit = () => {
    console.log("search", searchQuery);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const searchResult = restaurants.filter(
        ({ info }) =>
          info.id.toString().includes(q) ||
          info.name.toLowerCase().includes(q) ||
          info.cuisines.join(", ").toLowerCase().includes(q)
      );
      setFilteredList(searchResult);
    } else {
      console.log("else search", searchQuery);
      filteredList !== restaurants ? setFilteredList(restaurants) : null;
    }
  };

  if (!online) return <div role="alert">Please connect to Internet!</div>;

  return (
    <main className="app-body mb-2">
      {error ? (
        <div className="error" role="alert">
          {error}
        </div>
      ) : (
        <>
          <section
            id="body-top-row"
            className="flex gap-5 my-2 p-2 border-y border-gray-300"
          >
            <div id="top-res-grp" className="flex gap-2">
              <button
                className="px-2 border border-gray-500 rounded-lg hover:bg-gray-200"
                onClick={() => handleTopResFilter()}
                aria-pressed={topResFilter === true}
              >
                Top rated restaurants
              </button>
              {topResFilter && (
                <button
                  className="px-2 border border-s-gray-100 rounded-lg"
                  onClick={() => {
                    setFilteredList(restaurants);
                    setTopResFilter(false);
                  }}
                >
                  Clear filter
                </button>
              )}
            </div>

            <div id="search-feature" className="flex gap-2">
              <input
                className="px-2 border text-sm border-gray-300 rounded-lg"
                type="text"
                value={searchQuery}
                placeholder="Search by name or cuisine"
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search Restaurants"
              />
              <button
                className="px-2 border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200"
                onClick={() => handleSearchSubmit()}
              >
                Search
              </button>
            </div>
          </section>
          <h1 className="text-center mb-2 font-bold text-xl">{city}</h1>
          {filteredList.length === 0 ? (
            <Shimmer />
          ) : (
            <section id="res-container" className="flex flex-wrap gap-1">
              {filteredList.map((restaurant) =>
                restaurant.info.avgRating >= 4.5 ? (
                  <GoodRestaurant
                    key={restaurant.info.id}
                    restaurant={restaurant}
                    lat={lat}
                    long={long}
                  />
                ) : (
                  <RestaurantCard
                    key={restaurant.info.id}
                    restaurant={restaurant}
                    lat={lat}
                    long={long}
                  />
                )
              )}
            </section>
          )}
        </>
      )}
    </main>
  );
};

export default Body;
