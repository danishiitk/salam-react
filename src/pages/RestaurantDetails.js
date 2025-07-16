import useRestaurantDetails from "../utils/hooks/useRestaurantDetails";
import RestaurantCategory from "../components/Restaurant/RestaurantCategory";
import Shimmer from "../components/UI/Shimmer";

const RestaurantDetails = () => {
  console.log("[RestaurantDetails] rendered!");
  const { restaurant, categories, error, loading } = useRestaurantDetails();
  if (loading) return <Shimmer />;

  if (error)
    return (
      <div className="error-container">
        <h2>{error}</h2>
      </div>
    );

  return (
    <div
      id="restaurant-details-page"
      className="flex flex-col items-center mt-2 px-4 "
    >
      <div
        id="rest-info"
        className="max-w-screen-md w-full border-b border-gray-200 pb-6 mb-6"
      >
        <h1 className="font-bold text-3xl text-gray-800 mb-2">
          {restaurant.name}
        </h1>
        <div className="text-gray-600 space-y-1">
          <p>
            <span className="font-semibold">⭐ {restaurant.avgRating}</span> |{" "}
            {restaurant.cuisines?.join(", ")}
          </p>
          <p>
            {restaurant.areaName}, {restaurant.city}
          </p>
          <p>🕒 Delivery Time: {restaurant.sla?.deliveryTime} minutes</p>
          <p>{restaurant.costForTwoMessage}</p>
        </div>
      </div>

      <div className="max-w-screen-md w-full">
        {categories.length === 0 ? (
          <p className="text-gray-500">No menu items found.</p>
        ) : (
          <div id="rest-category-and-items" className="space-y-2">
            {categories.map((category) => (
              <RestaurantCategory
                key={category.card.card.categoryId}
                data={category.card.card}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
