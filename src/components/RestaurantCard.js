import { IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  resName,
  deliveryTime,
  cuisines,
  cloudinaryImageId,
  avgRating,
}) => {
  return (
    <div className="res-card">
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
