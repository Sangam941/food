import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cash",
  });

  const cartItems = [
     {
    id: 1,
    name: "Chicken Burger",
    category: "Burger",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    description:
      "Juicy grilled chicken burger with fresh lettuce, tomato, cheese, and special sauce.",
  },
  {
    id: 2,
    name: "Cheese Burger",
    category: "Burger",
    price: 400,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
    description:
      "Classic burger topped with melted cheese, fresh vegetables, and creamy sauce.",
  },
  ]

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = cartItems.length > 0 ? 50 : 0;

  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just simulate placing an order
    console.log("Order Data:", {
      customer: formData,
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
    });

    alert("Order placed successfully! 🎉");

   

    navigate("/");
  };

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-5xl">
            🛒
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Your cart is empty
          </h1>

          <p className="mt-3 text-gray-500">
            Add some delicious food before checking out.
          </p>

          <Link
            to="/"
            className="mt-7 inline-block rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
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
            Almost There
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Checkout
          </h1>

          <p className="mt-2 text-gray-500">
            Enter your details and place your order.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
            >
              {/* Customer Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Delivery Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Where should we deliver your order?
                </p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="98XXXXXXXX"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Delivery Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your complete delivery address"
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* City */}
                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    City
                  </label>

                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  >
                    <option value="">Select City</option>
                    <option value="Kathmandu">Kathmandu</option>
                    <option value="Lalitpur">Lalitpur</option>
                    <option value="Bhaktapur">Bhaktapur</option>
                  </select>
                </div>
              </div>

              {/* Payment */}
              <div className="mt-10 border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900">
                  Payment Method
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Select how you'd like to pay.
                </p>

                <div className="mt-5 space-y-3">
                  {/* Cash */}
                  <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-orange-400">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleChange}
                      className="h-4 w-4 accent-orange-500"
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        Cash on Delivery
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay when your food arrives.
                      </p>
                    </div>
                  </label>

                  {/* eSewa */}
                  <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-orange-400">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="esewa"
                      checked={formData.paymentMethod === "esewa"}
                      onChange={handleChange}
                      className="h-4 w-4 accent-orange-500"
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        eSewa
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay securely using eSewa.
                      </p>
                    </div>
                  </label>

                  {/* Card */}
                  <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-orange-400">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleChange}
                      className="h-4 w-4 accent-orange-500"
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        Debit / Credit Card
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay using your bank card.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Place Order */}
              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-orange-500 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Place Order · Rs. {total}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Your Order
              </h2>

              {/* Items */}
              <div className="mt-6 space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 rounded-lg object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-900">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {item.quantity} × Rs. {item.price}
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-gray-900">
                      Rs. {item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-6 border-t pt-5">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-semibold">
                      Rs. {subtotal}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Delivery Fee
                    </span>

                    <span className="font-semibold">
                      Rs. {deliveryFee}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex justify-between border-t pt-5">
                  <span className="font-bold text-gray-900">
                    Total
                  </span>

                  <span className="text-xl font-bold text-orange-500">
                    Rs. {total}
                  </span>
                </div>
              </div>

              <Link
                to="/cart"
                className="mt-6 block text-center text-sm font-semibold text-gray-500 transition hover:text-orange-500"
              >
                ← Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;