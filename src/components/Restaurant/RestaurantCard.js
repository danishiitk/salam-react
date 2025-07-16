import { useNavigate } from "react-router-dom";
import { IMAGE_CDN_URL } from "../../utils/constants";
import React from "react";

const RestaurantCard = ({ restaurant, lat, long }) => {
  const { id, name, sla, cuisines, cloudinaryImageId, avgRating } =
    restaurant.info;
  const deliveryTime = sla.deliveryTime;
  const navigate = useNavigate();
  return (
    <div
      id="res-card"
      className="w-full max-w-xs p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer transform hover:scale-105"
      onClick={() => navigate(`/restaurants/${id}?lat=${lat}&long=${long}`)}
    >
      <img
        className="w-full h-48 object-cover rounded-md mb-4"
        alt="Res Image"
        src={IMAGE_CDN_URL + cloudinaryImageId}
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">{name}</h2>
      <div
        id="rest-info-container"
        className="text-sm text-gray-600 mb-1"
      >
        <h3 className="flex items-center text-yellow-500 font-semibold"><span className="mr-1">⭐</span>{avgRating} stars</h3>
        <h3 className="text-gray-600"><span className="mr-1">⏱️</span>{deliveryTime} minutes</h3>
        <h3 className="text-xs text-gray-500 mt-2 line-clamp-2">{cuisines?.join(", ")}</h3>
      </div>
    </div>
  );
};

export default React.memo(RestaurantCard);

export const isGoodRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 px-3 py-1 text-xs font-semibold bg-green-600 text-white rounded-full z-10 shadow-md">
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
