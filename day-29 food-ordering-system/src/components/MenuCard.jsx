import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContextProvider } from "../context/CartContextProvider";

const MenuCard = ({ food }) => {

  const [isAdded, setIsAdded] = useState(false)

  const {addToCart} = useContext(CartContextProvider)

  const handleCart = (menuItem)=>{
    setIsAdded(true)
    addToCart(menuItem)

  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <Link to={`/food/${food._id}`}>
        <div className="h-56 overflow-hidden">
          <img
            src={food.image.secure_url}
            alt={food.name}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
              {food.category}
            </p>

            <h3 className="mt-1 text-lg font-bold text-gray-900">
              {food.name}
            </h3>
          </div>

          <p className="whitespace-nowrap text-lg font-bold text-orange-500">
            Rs. {food.price}
          </p>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {food.description}
        </p>

        {/* Actions */}
        <div className="mt-5 flex gap-3">
          <Link
            to={`/food/${food._id}`}
            className="flex-1 rounded-lg border border-gray-200 py-2.5 text-center text-sm font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500"
          >
            View Details
          </Link>

          <button
            onClick={()=>handleCart(food)}
            disabled={isAdded}
            className="rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
             {isAdded ? "Added to Cart ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;