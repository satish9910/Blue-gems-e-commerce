import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default function CollectionPage() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("relevant");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/get-products`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Sorting function
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low-to-high") return a.price - b.price;
    if (sort === "high-to-low") return b.price - a.price;
    return 0; // Default: relevant (no sorting)
  });

  return (
    <div className="w-[80%] mx-auto p-4">
      <div className="flex gap-4 justify-between">
        {/* Filters Sidebar */}
        <aside className=" w-1/5 hidden md:block">
          <h2 className="text-lg font-semibold">FILTERS</h2>
          <div className="mt-4">
            <h3 className="font-medium">CATEGORIES</h3>
            <div className="flex flex-col gap-2 mt-2">
              <label>
                <input type="checkbox" /> Men
              </label>
              <label>
                <input type="checkbox" /> Women
              </label>
              <label>
                <input type="checkbox" /> Kids
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">TYPE</h3>
            <div className="flex flex-col gap-2 mt-2">
              <label>
                <input type="checkbox" /> Topwear
              </label>
              <label>
                <input type="checkbox" /> Bottomwear
              </label>
              <label>
                <input type="checkbox" /> Winterwear
              </label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">ALL COLLECTIONS</h2>
            <select
              className="border p-2 rounded"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
          <div className="flex flex-wrap -mx-4">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product._id}
                image={`http://localhost:3000${product.image}`}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
