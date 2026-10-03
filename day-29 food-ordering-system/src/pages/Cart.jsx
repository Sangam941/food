import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContextProvider } from "../context/CartContextProvider";

const Cart = () => {
  const {allCartItems,decreaseQuantity,deliveryCharge, subTotal, totalAmount, deleteCart, increseQuantity} = useContext(CartContextProvider)
  
  const handleIncrement = (id) =>{
    increseQuantity(id)
    
  }
  const handleDecrease = (id) =>{
    decreaseQuantity(id)
    
  }

  if (allCartItems.length === 0) {
    return (
      <main className="min-h-[100vh] bg-gray-50 px-6 py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-5xl">
            🛒
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Your cart is empty
          </h1>

          <p className="mt-3 max-w-md text-gray-500">
            Looks like you haven't added anything to your cart yet.
            Explore our menu and find something delicious.
          </p>

          <Link
            to="/"
            className="mt-8 rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Explore Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div>
          <p className="font-semibold text-orange-500">
            Your Order
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-500">
            Review your items before placing your order.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            {allCartItems.map((item, index) => {
              const itemTotal = item.price * item.quantity;

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    {/* Image */}
                    <Link
                      to={`/food/${item.id}`}
                      className="shrink-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-32 w-full rounded-xl object-cover sm:h-28 sm:w-28"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                            {item.category}
                          </p>

                          <Link
                            to={`/food/${item.id}`}
                            className="mt-1 block text-lg font-bold text-gray-900 hover:text-orange-500"
                          >
                            {item.name}
                          </Link>

                          <p className="mt-1 text-sm text-gray-500">
                            Rs. {item.price} each
                          </p>
                        </div>

                        {/* Remove */}
                        <button

                        onClick={()=>deleteCart(item.id)}
                          className="text-sm font-medium text-red-500 transition hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>

                      {/* Bottom */}
                      <div className="mt-5 flex items-center justify-between">
                        {/* Quantity */}
                        <div className="flex items-center overflow-hidden rounded-lg border border-gray-200">
                          <button
                          onClick={()=>handleDecrease(item.id)}
                            className="flex h-9 w-9 items-center justify-center text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
                          >
                            −
                          </button>

                          <span className="text-black flex h-9 w-10 items-center justify-center border-x border-gray-200 text-sm font-semibold">
                            {item.quantity}
                          </span>

                          <button
                          onClick={()=>handleIncrement(item.id)}
                            className="flex h-9 w-9 items-center justify-center text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>

                        {/* Item Total */}
                        <p className="text-lg font-bold text-gray-900">
                          Rs. {itemTotal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-semibold text-gray-900">
                    Rs. {subTotal}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Delivery Fee
                  </span>

                  <span className="font-semibold text-gray-900">
                    Rs. {deliveryCharge}
                  </span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">
                      Total
                    </span>

                    <span className="text-xl font-bold text-orange-500">
                      Rs. {totalAmount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout */}
              <Link
                to="/checkout"
                className="mt-7 block rounded-full bg-orange-500 py-3.5 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/"
                className="mt-4 block text-center text-sm font-semibold text-gray-500 transition hover:text-orange-500"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;