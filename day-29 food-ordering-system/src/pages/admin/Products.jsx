import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContextProvider } from "../../context/ProductContextProvider";

const Products = () => {
  const navigate = useNavigate();

  const handleEdit = (food) => {
    navigate("/admin/add", {
      state: {
        product: food,
        isEdit: true,
      },
    });
  };

  const {allProducts, deleteProducts} = useContext(ProductContextProvider)

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            All Products
          </h1>

          <p className="mt-1 text-gray-500">
            Manage all food items in your menu.
          </p>
        </div>

        <Link
          to="/admin/add"
          className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          + Add Product
        </Link>
      </div>

      {/* Products Table */}
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Product
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Category
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Price
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {allProducts.map((food, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={food.image.secure_url
}
                      alt={food.name}
                      className="h-14 w-14 rounded-xl object-cover"
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        {food.name}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {food.description}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
                    {food.category}
                  </span>
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900">
                  Rs. {food.price}
                </td>

                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleEdit(food)}
                      className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:border-orange-500 hover:text-orange-500"
                    >
                      Edit
                    </button>

                    <button
                    onClick={()=>deleteProducts(food._id)}
                    className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;