import { useCallback, useState, useEffect } from "react";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useRestaurantList from "../utils/hooks/useRestaurantList";
import RestaurantCard, { isGoodRestaurant } from "../components/Restaurant/RestaurantCard";
import React, { useState, useEffect, useCallback } from "react";
import Shimmer from "../components/UI/Shimmer";

const Body = React.memo(() => {
  const online = useOnlineStatus();
  const { restaurants, city, error, lat, long } = useRestaurantList();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState(restaurants);
  const [topResFilter, setTopResFilter] = useState(false);

  const GoodRestaurant = isGoodRestaurant(RestaurantCard);
  useEffect(() => {
    setFilteredList(restaurants);
  }, [restaurants]);

  const handleTopResFilter = useCallback(() => {
    const topRestaurants = filteredList.filter((r) => r.info.avgRating >= 4.5);
    setFilteredList(topRestaurants);
    setTopResFilter(true);
  }, [filteredList]);

  const handleSearchSubmit = useCallback(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const searchResult = restaurants.filter(
        ({ info }) =>
          info.id.toString().includes(q) ||
          info.name.toLowerCase().includes(q) ||
          info.cuisines.join(", ").toLowerCase().includes(q)
      );
      setFilteredList(searchResult);
    } else if (filteredList !== restaurants) {
      setFilteredList(restaurants);
    }
  }, [searchQuery, restaurants, filteredList]);

  if (!online) return <div role="alert">Please connect to Internet!</div>;

  return (
    <main className="container mx-auto p-4 min-h-screen bg-gray-50">
      {error ? (
        <div className="error" role="alert">
          {error}
        </div>
      ) : (
        <>
          <section
            id="body-top-row"
            className="flex flex-col md:flex-row items-center justify-between gap-4 my-4 p-4 border-y border-gray-300 bg-white rounded-lg shadow-sm"
          >
            <div id="top-res-grp" className="flex items-center gap-2">
              <button
                className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                onClick={() => handleTopResFilter()}
                aria-pressed={topResFilter === true}
              >
                Top rated restaurants
              </button>
              {topResFilter && (
                <button
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => {
                    setFilteredList(restaurants);
                    setTopResFilter(false);
                  }}
                >
                  Clear filter
                </button>
              )}
            </div>

            <div id="search-feature" className="flex items-center gap-2">
              <input
                className="px-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                value={searchQuery}
                placeholder="Search by name or cuisine"
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search Restaurants"
              />
              <button
                className="px-4 py-2 border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                onClick={() => handleSearchSubmit()}
              >
                Search
              </button>
            </div>
          </section>
          <h1 className="text-center mb-6 font-extrabold text-3xl text-gray-800">Restaurants in {city}</h1>
          {filteredList.length === 0 ? (
            <Shimmer />
          ) : (
            <section id="res-container" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
});

export default Body;
