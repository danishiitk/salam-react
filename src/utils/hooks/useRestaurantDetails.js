import { useState, useEffect } from "react";
import "../../styles/RestaurantDetails.css";
import { SWIGGY_RESTAURANT_DETAILS_API } from "../constants";
import { useParams, useSearchParams } from "react-router-dom";
const useRestaurantDetails = () => {
  console.log("[useRestaurantDetails] hook initialized!");
  const [restaurant, setRestaurant] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const long = searchParams.get("long");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchRestaurantDetails = async () => {
    console.log("[useRestaurantDetails] fetching restaurant details!");
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

      const extractedMenuItems = menuCards
        .map((card) => card.card?.card?.itemCards)
        .filter(Boolean)
        .flat()
        .map((itemCard) => itemCard.card?.info)
        .filter(Boolean);

      setRestaurant(restaurantInfo);
      setMenuItems(extractedMenuItems);
    } catch (err) {
      console.error("Error fetching restaurant:", err);
      setError("Something went wrong while fetching restaurant details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("[useRestaurantDetails] useEffect triggered!");
    fetchRestaurantDetails();
  }, [id, lat, long]);
  return { restaurant, menuItems, loading, error };
};

export default useRestaurantDetails;
