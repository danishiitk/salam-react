import { useNavigate } from "react-router-dom";
import { IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  id,
  resName,
  deliveryTime,
  cuisines,
  cloudinaryImageId,
  avgRating,
  lat,
  long,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="res-card"
      onClick={() => navigate(`/restaurants/${id}?lat=${lat}&long=${long}`)}
    >
      <img
        className="res-img"
        alt="Res Image"
        src={IMAGE_CDN_URL + cloudinaryImageId}
      />
      <h2>{resName}</h2>
      <span className="rest-info-container">
        <h3>{avgRating} stars</h3>
        <h3>{deliveryTime} minutes</h3>
        <h3>{cuisines.join(", ")}</h3>
      </span>
    </div>
  );
};
export default RestaurantCard;
