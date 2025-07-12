import "../styles/RestaurantDetails.css";
import useRestaurantDetails from "../utils/hooks/useRestaurantDetails";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  console.log("[RestaurantDetails] rendered!");
  const { restaurant, menuItems, error, loading } = useRestaurantDetails();
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
