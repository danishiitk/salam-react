import { useEffect, useState } from "react";
import { SWIGGY_API } from "../constants";
import useUserLocation from "./useUserLocation";

const useRestaurantList = () => {
  
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const { lat, long } = useUserLocation();
  useEffect(() => {
    
    if (!lat || !long) {
      
      return;
    }

    

    const fetchRestaurants = async () => {
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
        const userCity =
          data?.data?.cards?.[1]?.card?.card?.header?.title || "";

        
          "[useRestaurantList] Restaurant list fetched:",

        setRestaurants(list);
        
        setCity(userCity);
        
        setError(null); // Clear any previous errors on success
      } catch (err) {
        console.error("[useRestaurantList] Fetch error:", err, "URL:", url);
        setError(`Failed to fetch restaurants: ${err.message || err}`);
      }
    };

    fetchRestaurants();
  }, [lat, long]);
  


  return { restaurants, city, error, lat, long };
};

export default useRestaurantList;
