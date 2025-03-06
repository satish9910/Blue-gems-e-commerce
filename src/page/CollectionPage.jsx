import { useState } from "react";
import ProductCard from "../components/ProductCard";


const products = [
  { id: 1, name: "Kid Tapered Slim Fit Trouser", price: 38, image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Men Round Neck Pure Cotton T-shirt", price: 64, image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Boy Round Neck Pure Cotton T-shirt", price: 60, image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Women Zip-Front Relaxed Fit Jacket", price: 74, image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "Men Tapered Fit Flek Front Trouser", price: 50, image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Girls Round Neck Cotton Top", price: 45, image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, name: "Women Zip-Front Relaxed Fit Jacket", price: 72, image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, name: "Kid Tapered Slim Fit Trouser", price: 40, image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function CollectionPage() {
  const [sort, setSort] = useState("relevant");

  return (
    <div className="w-[80%] mx-auto p-4">
      <div className="flex gap-4 justify-between">
        {/* Filters Sidebar */}
        <aside className=" w-1/5 hidden md:block">
          <h2 className="text-lg font-semibold">FILTERS</h2>
          <div className="mt-4">
            <h3 className="font-medium">CATEGORIES</h3>
            <div className="flex flex-col gap-2 mt-2">
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Kids</label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">TYPE</h3>
            <div className="flex flex-col gap-2 mt-2">
              <label><input type="checkbox" /> Topwear</label>
              <label><input type="checkbox" /> Bottomwear</label>
              <label><input type="checkbox" /> Winterwear</label>
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
            {products.map((product) => (
              <ProductCard key={product.id} image={product.image} name={product.name} price={product.price} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}