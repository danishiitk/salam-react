import { IMAGE_CDN_URL } from "../../utils/constants";

const CategoryItems = ({ itemCards }) => {
  return (
    <div id="all-items-in-a-category" className="bg-blue-100">
      {itemCards.map((itemCard) => (
        <div
          id="category-item"
          className="flex justify-between p-1 border-b border-gray-400 w-full"
          key={itemCard.card.info.id}
        >
          <div id="item-details" className="w-9/12">
            <div className="flex justify-between">
              <span className="text-sm">{itemCard.card.info.name}</span>
              <span className="mr-2">
                ₹{" "}
                {itemCard.card.info.price
                  ? itemCard.card.info.price / 100
                  : itemCard.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{itemCard.card.info.description}</p>
          </div>

          {/* Image + Button Container */}
          <div className="relative w-40 h-28 ml-1 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={IMAGE_CDN_URL + itemCard.card.info.imageId}
              alt={itemCard.card.info.name}
            />
            <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 z-10">
              <button className="p-1 text-xs bg-blue-300 border border-gray-400 rounded-md shadow hover:bg-blue-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryItems;
