import { useCallback, useEffect, useState } from "react";
import { SWIGGY_API } from "../constants";
import useUserLocation from "./useUserLocation";

const useRestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { lat, long, loading: locationLoading, error: locationError } = useUserLocation();

  const fetchRestaurants = useCallback(async () => {
    if (locationError) {
      setError(locationError);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const url = SWIGGY_API.replace("latitude", lat).replace(
        "longitude",
        long
      );
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();

      const list =
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const userCity = data?.data?.cards?.[1]?.card?.card?.header?.title || "";

      setRestaurants(list);
      setCity(userCity);

      setError(null); // Clear any previous errors on success
    } catch (err) {
      console.error("[useRestaurantList] Fetch error:", err, "URL:", url);
      setError(`Failed to fetch restaurants: ${err.message || err}`);
    } finally {
      setLoading(false);
    }
  }, [lat, long]);

  useEffect(() => {
    if (locationError) {
      setError(locationError);
      setLoading(false);
      return;
    }
    if (!lat || !long || locationLoading) {
      return;
    }
    fetchRestaurants();
  }, [lat, long, locationLoading, locationError]);

  return { restaurants, city, error, lat, long, loading, refetch: fetchRestaurants, locationError };
};

export default useRestaurantList;
