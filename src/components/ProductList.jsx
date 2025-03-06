// components/ProductList.jsx

import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kid Tapered Slim Fit Trouser",
    price: 38,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 64,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Boy Round Neck Pure Cotton T-shirt",
    price: 60,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Women Zip-Front Relaxed Fit Jacket",
    price: 74,
  },
];

const ProductList = () => {
  return (
    <div className="w-[80%] mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Latest Collections</h1>
      <p className=" text-center mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
