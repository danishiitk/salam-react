import useRestaurantDetails from "../utils/hooks/useRestaurantDetails";
import RestaurantCategory from "../components/Restaurant/RestaurantCategory";
import Shimmer from "../components/UI/Shimmer";

const RestaurantDetails = () => {
  
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
      className="flex flex-col items-center mt-8 px-4 py-8 bg-gray-50 min-h-screen"
    >
      <div
        id="rest-info"
        className="max-w-screen-lg w-full bg-white shadow-lg rounded-lg p-8 mb-8 border-b border-gray-200"
      >
        <h1 className="font-extrabold text-4xl text-gray-900 mb-3">
          {restaurant.name}
        </h1>
        <div className="text-gray-700 space-y-2 text-lg">
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

      <div className="max-w-screen-lg w-full bg-white shadow-lg rounded-lg p-8">
        {categories.length === 0 ? (
          <p className="text-gray-500">No menu items found.</p>
        ) : (
          <div id="rest-category-and-items" className="space-y-6">
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
