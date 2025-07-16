import { useNavigate } from "react-router-dom";
import { IMAGE_CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ restaurant, lat, long }) => {
  const { id, name, sla, cuisines, cloudinaryImageId, avgRating } =
    restaurant.info;
  const deliveryTime = sla.deliveryTime;
  const navigate = useNavigate();
  return (
    <div
      id="res-card"
      className=" p-1 w-40 h-96 rounded-lg border border-gray-400 hover:bg-blue-300"
      onClick={() => navigate(`/restaurants/${id}?lat=${lat}&long=${long}`)}
    >
      <img
        className="w-40 h-40 rounded-lg"
        alt="Res Image"
        src={IMAGE_CDN_URL + cloudinaryImageId}
      />
      <h2 className="ml-1 py-2 font-semibold text-gray-600 text-lg">{name}</h2>
      <div
        id="rest-info-container"
        className="ml-1 font-serif font-medium text-gray-500"
      >
        <h3>{avgRating} stars</h3>
        <h3>{deliveryTime} minutes</h3>
        <h3 className="text-sm">{cuisines?.join(", ")}</h3>
      </div>
    </div>
  );
};
export default RestaurantCard;

export const isGoodRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative w-40 h-96">
        <label className="absolute top-1 left-1 px-2 py-1 text-xs bg-black text-white rounded-sm z-10">
          Good Restaurant
        </label>
        <RestaurantCard
          key={props.restaurant.id}
          restaurant={props.restaurant}
          lat={props.lat}
          long={props.long}
        />
      </div>
    );
  };
};
