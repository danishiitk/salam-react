import { IMAGE_CDN_URL } from "../../utils/constants";

const CategoryItems = ({ itemCards }) => {
  return (
    <div id="all-items-in-a-category" className="p-4 bg-gray-50">
      {itemCards.map((itemCard) => (
        <div
          id="category-item"
          className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0"
          key={itemCard.card.info.id}
        >
          <div id="item-details" className="flex-1 pr-4">
            <div className="flex justify-between">
              <span className="font-semibold text-lg text-gray-800">{itemCard.card.info.name}</span>
              <span className="font-bold text-gray-700">
                ₹{" "}
                {itemCard.card.info.price
                  ? itemCard.card.info.price / 100
                  : itemCard.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">{itemCard.card.info.description}</p>
          </div>

          {/* Image + Button Container */}
          <div className="relative w-48 h-32 ml-4 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={IMAGE_CDN_URL + itemCard.card.info.imageId}
              alt={itemCard.card.info.name}
            />
            <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 z-10">
              <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300">
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
