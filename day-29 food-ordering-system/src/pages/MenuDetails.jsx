import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContextProvider } from "../context/ProductContextProvider";

const MenuDetails = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const {getSingleProduct, fetchSingleProduct} = useContext(ProductContextProvider)

  useEffect(() => {
    fetchSingleProduct(id)
  }, [id])
  
  // const food = allProducts.find((item) => item._id === Number(id));
  const food = getSingleProduct

  // If food doesn't exist
  if (!food) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Food not found
          </h1>

          <p className="mt-3 text-gray-500">
            The food item you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Back to Menu
          </Link>
        </div>
      </main>
    );
  }

  const totalPrice = food.price * quantity;

  // const handleAddToCart = () => {
  //   // Add the food multiple times based on quantity
  //   for (let i = 0; i < quantity; i++) {
  //     addToCart(food);
  //   }

  //   navigate("/cart");
  // };

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-gray-500 transition hover:text-orange-500"
            >
              Home
            </Link>

            <span className="text-gray-400">/</span>

            <span className="font-medium text-gray-900">
              {food.name}
            </span>
          </div>
        </div>
      </section>

      {/* Food Details */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl bg-gray-100">
            <img
              src={food.image.secure_url}
              alt={food.name}
              className="h-[400px] w-full object-cover md:h-[550px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="font-semibold uppercase tracking-wide text-orange-500">
              {food.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              {food.name}
            </h1>

            <div className="mt-5 flex items-center gap-4">
              <span className="text-3xl font-bold text-orange-500">
                Rs. {food.price}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                Available
              </span>
            </div>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {food.description}
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-orange-50 p-4 text-center">
                <span className="text-2xl">🍽️</span>
                <p className="mt-2 text-xs font-semibold text-gray-700">
                  Freshly Made
                </p>
              </div>

              <div className="rounded-xl bg-orange-50 p-4 text-center">
                <span className="text-2xl">🚚</span>
                <p className="mt-2 text-xs font-semibold text-gray-700">
                  Fast Delivery
                </p>
              </div>

              <div className="rounded-xl bg-orange-50 p-4 text-center">
                <span className="text-2xl">⭐</span>
                <p className="mt-2 text-xs font-semibold text-gray-700">
                  Top Rated
                </p>
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-3 font-semibold text-gray-900">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200">
                <button
                  onClick={() =>
                    setQuantity((prev) => Math.max(1, prev - 1))
                  }
                  className="flex h-12 w-12 items-center justify-center text-xl font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  −
                </button>

                <span className="flex h-12 w-14 items-center justify-center border-x border-gray-200 font-semibold text-gray-900">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex h-12 w-12 items-center justify-center text-xl font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="mt-8 flex items-center justify-between border-t pt-6">
              <div>
                <p className="text-sm text-gray-500">
                  Total Price
                </p>

                <p className="mt-1 text-2xl font-bold text-gray-900">
                  Rs. {totalPrice}
                </p>
              </div>

              <button
                // onClick={handleAddToCart}
                className="rounded-full bg-orange-500 px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-orange-600"
              >
                Add to Cart
              </button>
            </div>

            {/* Back */}
            <Link
              to="/"
              className="mt-6 inline-block text-sm font-semibold text-gray-500 transition hover:text-orange-500"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MenuDetails;