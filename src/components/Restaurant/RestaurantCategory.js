import { BsArrowDown } from "react-icons/bs";
import CategoryItems from "./CategoryItems";
import { useState } from "react";
const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  return (
    <div id="category" className="bg-white shadow-md rounded-lg overflow-hidden">
      <div
        id="category-header"
        className="p-4 flex justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white cursor-pointer transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-indigo-700"
        onClick={() => {
          setShowItems(!showItems);
        }}
      >
        <h1 className="font-bold text-xl">{data.title} ({data.itemCards.length})</h1>
        <BsArrowDown className={`text-2xl transition-transform duration-300 ${showItems ? 'rotate-180' : ''}`} />
      </div>
      {showItems && <CategoryItems itemCards={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
