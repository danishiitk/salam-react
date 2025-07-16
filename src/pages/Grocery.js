// src/components/Grocery.js
import { PlusCircle, ShoppingCart } from "lucide-react";

const groceries = [
  {
    name: "Organic Apples",
    price: "$3.99/lb",
    description: "Freshly picked from local farms",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Almond Milk",
    price: "$2.49",
    description: "Unsweetened and dairy-free",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Whole Grain Bread",
    price: "$2.99",
    description: "Baked fresh daily",
    image:
      "https://images.unsplash.com/photos/a-loaf-of-whole-wheat-bread-on-a-white-surface-k2rX1Mk190I?auto=format&fit=crop&w=800&q=80",
  },
];

const Grocery = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-4 py-10">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold text-green-800 mb-2 tracking-tight">
        Grocery Items
      </h1>
      <p className="text-lg text-green-600 mb-10">
        Fresh picks for a healthy lifestyle
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {groceries.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-lg bg-white transition hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h2 className="text-xl font-semibold text-green-800">
                {item.name}
              </h2>
              <p className="text-green-600 text-sm mb-1">{item.description}</p>
              <p className="text-green-900 font-medium mb-3">{item.price}</p>
              <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl">
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="px-6 py-3 text-lg rounded-xl bg-green-700 hover:bg-green-800 text-white flex items-center justify-center gap-2">
          <PlusCircle size={20} /> Add New Item
        </button>
      </div>
    </div>
  </div>
);

export default Grocery;
