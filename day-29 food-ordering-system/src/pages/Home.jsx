import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MenuCard from "../components/MenuCard";
import { ProductContextProvider } from "../context/ProductContextProvider";

const categories = [
  "All",
  "Burger",
  "Momo",
  "Pizza",
  "Sides",
  "Dessert",
  "Drinks",
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const {allProducts}= useContext(ProductContextProvider)

  const filteredFoods =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((food) => food.category === selectedCategory);

  return (
    <main className="bg-white relative pt-20">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-orange-50">
        <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 lg:px-8">
          {/* Hero Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Fresh & Delicious
            </span>

            <h1 className="max-w-xl text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Delicious food,
              <span className="block text-orange-500">
                delivered to you.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Discover delicious meals made with fresh ingredients and
              delivered straight to your doorstep.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Menu
              </a>

              <Link
                to="/cart"
                className="rounded-full border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500"
              >
                View Cart
              </Link>
            </div>

            {/* Small Features */}
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-gray-600">
              <div>
                <p className="text-lg font-bold text-gray-900">30 min</p>
                <p>Fast Delivery</p>
              </div>

              <div>
                <p className="text-lg font-bold text-gray-900">100%</p>
                <p>Fresh Food</p>
              </div>

              <div>
                <p className="text-lg font-bold text-gray-900">4.8 ★</p>
                <p>Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-orange-200 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1000&q=80"
              alt="Delicious restaurant food"
              className="relative h-[420px] w-[420px] rounded-full object-cover shadow-2xl md:h-[500px] md:w-[500px]"
            />
          </div>
        </div>
      </section>

      {/* ================= CATEGORY SECTION ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-orange-500">
            Explore Categories
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            What are you craving?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Choose your favorite category and discover something delicious.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ================= MENU SECTION ================= */}
      <section
        id="menu"
        className="bg-gray-50 px-6 py-16 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-semibold text-orange-500">
                Our Menu
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                Popular dishes
              </h2>

              <p className="mt-3 text-gray-500">
                Freshly prepared favorites you'll love.
              </p>
            </div>

            <p className="text-sm font-medium text-gray-500">
              {filteredFoods.length} items
            </p>
          </div>

          {/* Food Cards */}
          {filteredFoods.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredFoods.map((food) => (
                <MenuCard key={food.id} food={food} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg font-semibold text-gray-700">
                No food found.
              </p>

              <p className="mt-2 text-gray-500">
                Try selecting another category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;