export const IMAGE_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL =
  "https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg?semt=ais_hybrid";

export const SWIGGY_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING";

export const SWIGGY_API_PROXY = `https://corsproxy.io/?${SWIGGY_API}`;
// const restaurants =
//   data?.data?.cards?.find(
//     (card) => card.card?.card?.id === "restaurant_grid_listing"
//   )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

export const SWIGGY_RESTAURANT_DETAILS_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=";
// Replace lat/lng as per your region
