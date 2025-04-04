  import { useState } from "react";
  import axios from "axios";
  import Cookies from "js-cookie";

  const AddItem = () => {
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      price: "",
      discount: "",
      stock: "",
      category: "mobile",
    });
    const [images, setImages] = useState([]);
    const token = Cookies.get("admintoken");

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
      setImages([...e.target.files]);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.name || !formData.price || !formData.stock || images.length === 0) {
        alert("Please fill in all required fields and upload at least one image.");
        return;
      }
      
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      images.forEach((file) => data.append("image", file));

      try {
        const response = await axios.post("http://localhost:3000/admin/create", data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Product added:", response.data);
        alert("Product added successfully!");
        setFormData({ name: "", description: "", price: "", discount: "", stock: "", category: "mobile" });
        setImages([]);
      } catch (error) {
        console.error("Error adding product:", error);
        alert("Failed to add product. Please try again.");
      }
    };

    return (
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="file" multiple onChange={handleFileChange} className="border p-2 w-full" />
          <input className="border p-2 w-full" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
          <textarea className="border p-2 w-full" name="description" placeholder="Product Description" value={formData.description} onChange={handleChange}></textarea>
          <input className="border p-2 w-full" name="price" type="number" placeholder="Product Price" value={formData.price} onChange={handleChange} required />
          <input className="border p-2 w-full" name="discount" type="number" placeholder="Discount" value={formData.discount} onChange={handleChange} />
          <input className="border p-2 w-full" name="stock" type="number" placeholder="Stock Quantity" value={formData.stock} onChange={handleChange} required />
          <select className="border p-2 w-full" name="category" value={formData.category} onChange={handleChange}>
            <option value="mobile">Mobile</option>
            <option value="electronics">Electronics</option>
          </select>
          <button type="submit" className="bg-black text-white px-4 py-2 w-full rounded-md hover:bg-gray-800 transition">ADD</button>
        </form>
      </div>
    );
  };

  export default AddItem;