import { useEffect, useState } from "react";
import { SWIGGY_API } from "../constants";
import useUserLocation from "./useUserLocation";

const useRestaurantList = () => {
  console.log("[useRestaurantList] Hook initialized");
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const { lat, long } = useUserLocation();
  useEffect(() => {
    console.log("[useRestaurantList] useEffect triggered");
    if (!lat || !long) {
      console.log("[useRestaurantList] Waiting for lat/long...");
      return;
    }

    console.log("[useRestaurantList] lat/long received:", lat, long);

    const fetchRestaurants = async () => {
      try {
        console.log("[useRestaurantList] Fetching restaurant list...");
        const url = SWIGGY_API.replace("latitude", lat).replace(
          "longitude",
          long
        );
        const res = await fetch(url);
        const data = await res.json();

        const list =
          data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        const userCity =
          data?.data?.cards?.[1]?.card?.card?.header?.title || "";

        console.log(
          "[useRestaurantList] Restaurant list fetched:",
          list.length
        );
        setRestaurants(list);
        console.log("[useRestaurantList} set restaurants");
        setCity(userCity);
        console.log("[useRestaurantList} set city");
      } catch (err) {
        setError("Failed to fetch restaurants");
      }
    };

    fetchRestaurants();
  }, [lat, long]);
  console.log("[useRestaurantList] before return", {
    restaurants,
    city,
    error,
  });
  return { restaurants, city, error, lat, long };
};

export default useRestaurantList;
