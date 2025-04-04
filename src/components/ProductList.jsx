// components/ProductList.jsx

import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';

const ProductList = ({ products = [] }) => {
  return (
    <div className="w-[80%] mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Latest Collections</h1>
      <p className="text-center mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the.
      </p>
      <div className="flex flex-wrap -mx-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <ProductCard 
              key={product._id} 
              image={product.image} 
              name={product.name} 
              price={product.price} 
            />
          ))
        ) : (
          <p className="text-center w-full text-gray-500">No products available.</p>
        )}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired, // Fixed _id instead of id
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export default ProductList;
