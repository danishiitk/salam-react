import { BsArrowDown } from "react-icons/bs";
import CategoryItems from "./CategoryItems";
import { useState } from "react";
const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  return (
    <div id="category">
      <div
        id="category-header"
        className="p-2 flex justify-between items-center bg-blue-300 cursor-pointer rounded-sm"
        onClick={() => {
          setShowItems(!showItems);
        }}
      >
        <h1 className="font-semibold">{data.title}</h1>
        <BsArrowDown className="" />
      </div>
      {showItems && <CategoryItems itemCards={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
