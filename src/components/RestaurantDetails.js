import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTAURANT_DETAILS_API } from "../utils/constants";
import "../styles/RestaurantDetails.css";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRestaurantDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${SWIGGY_RESTAURANT_DETAILS_API}${id}`);
      if (!response.ok) throw new Error("Network response was not ok");

      const jsonResponse = await response.json();

      const restaurantInfo =
        jsonResponse?.data?.cards?.[2]?.card?.card?.info || {};
      console.log(jsonResponse);
      console.log(restaurantInfo);
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
    fetchRestaurantDetails();
  }, [id]);

  if (loading) return <Shimmer />;

  if (error)
    return (
      <div className="error-container">
        <h2>{error}</h2>
      </div>
    );

  return (
    <div className="restaurant-details">
      <h1>{restaurant.name}</h1>
      <p className="rating-line">
        ⭐ {restaurant.avgRating} | {restaurant.cuisines?.join(", ")}
      </p>
      <p>
        {restaurant.areaName}, {restaurant.city}
      </p>
      <p>🕒 Delivery Time: {restaurant.sla?.deliveryTime} minutes</p>
      <p className="menu-item-price"> {restaurant.costForTwoMessage}</p>

      <h2 className="menu-heading">Menu</h2>
      {menuItems.length === 0 ? (
        <p>No menu items found.</p>
      ) : (
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={`${item.id}-${index}`} className="menu-item">
              <h3>{item.name}</h3>
              <p className="menu-item-price">
                ₹ {item.price ? item.price / 100 : item.defaultPrice / 100}
              </p>
              {item.description && (
                <p className="menu-item-description">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantDetails;
