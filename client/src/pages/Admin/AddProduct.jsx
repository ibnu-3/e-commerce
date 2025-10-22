import React, { useState } from "react";
import DashboardLayout from "../../components/admin/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import useProduct from "../../context/hooks/useProduct";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {handleProductChange}=useProduct()
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    oldPrice: "",
    newPrice: "",
    countInStock: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const encodeImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file); 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true)
    setSuccessMessage("");

    try {
      
      if (
        !formData.name ||
        !formData.category ||
        !formData.oldPrice ||
        !formData.newPrice ||
        !formData.countInStock ||
        !image
      ) {
        setError("Please fill in all fields and select an image.");
        return;
      }

      const base64Image = await encodeImageToBase64(image);

      const productData = {
        ...formData,
        image: base64Image,
      };

     
      const response = await axiosInstance.post("/api/products", productData); 
      if (response.status === 201) {
        
        setSuccessMessage("Product added successfully!");
        handleProductChange()
        
        setFormData({
          name: "",
          category: "",
          description: "",
          oldPrice: "",
          newPrice: "",
          countInStock: "",

         
        });
        setImage(null);
        navigate('/admin/products')
        setLoading(false)
      } else {
        setError("Failed to add product: " + response.data.message);
        setLoading(false)
      }
    } catch (err) {
      console.error("Error adding product:", err);

      setError(err.message || "Failed to add product."); 
      setLoading(false)
    }
  };
  return (
    <DashboardLayout activeMenu={"Add Product"}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {successMessage && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

         
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="oldPrice"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Old Price:
            </label>
            <input
              type="number"
              id="oldPrice"
              name="oldPrice"
              value={formData.oldPrice}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="newPrice"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              New Price:
            </label>
            <input
              type="number"
              id="newPrice"
              name="newPrice"
              value={formData.newPrice}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="countInStock"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Count in Stock:
            </label>
            <input
              type="number"
              id="countInStock"
              name="countInStock"
              value={formData.countInStock}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
           <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
             Description:
            </label>
            <textarea
            rows={3}
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {image && (
              <p className="text-sm text-gray-500">
                Selected image: {image.name}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 disabled:bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
          {loading ? "Adding": 'Add Product'}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddProduct;
