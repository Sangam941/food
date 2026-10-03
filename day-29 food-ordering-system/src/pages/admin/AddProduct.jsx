import { useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductContextProvider } from "../../context/ProductContextProvider";

const AddProduct = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  //   for edit
  const location = useLocation();
  console.log(location)
  const product = location.state?.product;
  const isEdit = location.state?.isEdit

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(product?.image.secure_url || "");

  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [category, setCategory] = useState(product?.category || "");
  const [price, setPrice] = useState(product?.price || "");

  console.log(product);

  const {createProducts, EditProducts} = useContext(ProductContextProvider)

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (!selectedImage) return;

    setImage(selectedImage);

    const previewUrl = URL.createObjectURL(selectedImage);
    setImagePreview(previewUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const formData = new FormData()

  formData.append("name", name)
  formData.append("description", description)
  formData.append("price", price)
  formData.append("category", category)
  formData.append("image", image)


  if(isEdit){
    // call edit api
    EditProducts(formData, product._id)
  }else{
    createProducts(formData)

  }

    navigate("/admin/all-products"); 
  };

  return (
    <div className="mx-auto max-w-6xl text-black">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{isEdit?"Edit Product":"Add New Product"}</h1>

        <p className="mt-2 text-gray-500">
          {isEdit? "Edit your existing food item":"Add a new food item to your restaurant menu."}
        </p>
      </div>

      {/* Main Card */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          {/* ================= IMAGE SECTION ================= */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-gray-700">
              Product Image
            </label>

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            {/* Upload Area */}
            <div
              onClick={() => fileInputRef.current.click()}
              className="group relative flex h-[420px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-orange-400 hover:bg-orange-50"
            >
              {imagePreview ? (
                <>
                  {/* Image Preview */}
                  <img
                    src={imagePreview}
                    alt="Product preview"
                    className="h-full w-full object-cover"
                  />

                  {/* Change Image Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                    <div className="rounded-xl bg-white px-5 py-3 font-semibold text-gray-800 shadow-lg">
                      Change Image
                    </div>
                  </div>
                </>
              ) : (
                /* Empty Upload State */
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
                    📷
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-800">
                    Upload Product Image
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Click here to choose an image
                  </p>

                  <p className="mt-1 text-xs text-gray-400">PNG, JPG or JPEG</p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current.click();
                    }}
                    className="mt-6 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    Choose Image
                  </button>
                </div>
              )}
            </div>

            {image && (
              <p className="mt-3 truncate text-sm text-gray-500">
                Selected: {image.name}
              </p>
            )}
          </div>

          {/* ================= PRODUCT INFORMATION ================= */}
          <div>
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Product Information
            </h2>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Product Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Chicken Burger"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                >
                  <option value="">Select category</option>
                  <option value="Burger">Burger</option>
                  <option value="Momo">Momo</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Sides">Sides</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Drinks">Drinks</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Price
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500">
                    Rs.
                  </span>

                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="350"
                    min="0"
                    required
                    className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your food item..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-10 flex justify-end gap-3 border-t border-gray-100 pt-6">
          <button
            type="button"
            onClick={() => navigate("/admin/all-products")}
            className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            {isEdit? "Edit Product":"Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
