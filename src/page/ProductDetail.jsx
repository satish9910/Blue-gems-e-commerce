import { useState } from "react";
import { Star } from "lucide-react";

const ProductDetail = () => {
  const product = {
    name: "Kid Tapered Slim Fit Trouser",
    price: 40,
    rating: 4.5,
    reviews: 122,
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
  };

  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="w-[80%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Image Section */}
      <div className="flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md r"
        />
      </div>

      {/* Product Info Section */}
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < product.rating ? "text-yellow-500" : "text-gray-300"}`}
            />
          ))}
          <span className="text-gray-500">({product.reviews})</span>
        </div>
        <p className="text-xl font-semibold mt-2">${product.price}</p>
        <p className="text-gray-600 mt-4">{product.description}</p>

        {/* Size Selection */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Select Size</h2>
          <div className="flex gap-2 mt-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border  ${
                  selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-6 px-6 py-3 bg-black text-white ">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
