import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";



const ProductList = () => {
  const [products, setProducts] = useState([]);
    const token = Cookies.get("admintoken");

  useEffect(() => {
    axios
    
      .get(`${import.meta.env.VITE_BASE_URL}/admin/getProducts`)
      .then((response) => {
        setProducts(response.data.products); // Extract products array
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleDelete = (id) => async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/admin/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },

        }

      );
      console.log("Delete Response:", response.data);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
  

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Products List</h2>
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Discount</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="text-center">
              <td className="p-2 border">
                <img
                  src={`${import.meta.env.VITE_BASE_URL}${product.image}`}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">{product.category}</td>
              <td className="p-2 border">${product.price}</td>
              <td className="p-2 border">{product.stock}</td>
              <td className="p-2 border">${product.discount}</td>
              <td className="p-2 border">
                <button className="text-red-500 hover:text-red-700" title="Delete" onClick={handleDelete(product._id)}>
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
