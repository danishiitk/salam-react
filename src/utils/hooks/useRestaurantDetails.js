import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_DETAILS_API } from "../constants";
import { useParams, useSearchParams } from "react-router-dom";
const useRestaurantDetails = () => {
  
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const long = searchParams.get("long");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchRestaurantDetails = async () => {
    
    try {
      setLoading(true);
      const response = await fetch(
        `${SWIGGY_RESTAURANT_DETAILS_API.replace("latitude", lat).replace(
          "longitude",
          long
        )}${id}`
      );
      if (!response.ok) throw new Error("Network response was not ok");

      const jsonResponse = await response.json();
      
      const restaurantInfo =
        jsonResponse?.data?.cards?.[2]?.card?.card?.info || {};
      const menuCards =
        jsonResponse?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards || [];

      const categories = menuCards.filter(
        (card) =>
          card.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setRestaurant(restaurantInfo);
      setCategories(categories);
    } catch (err) {
      console.error("Error fetching restaurant:", err);
      setError("Something went wrong while fetching restaurant details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    
    fetchRestaurantDetails();
  }, [id, lat, long]);
  
  
  return { restaurant, categories, loading, error };
};

export default useRestaurantDetails;
