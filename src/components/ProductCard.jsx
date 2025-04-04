// components/ProductCard.jsx
import PropTypes from 'prop-types';


const ProductCard = ({ id, image, name, price }) => {
  console.log("ProductCard", id, image, name, price); 
  return (
    <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="overflow-hidden group">
        <img src={image} alt={name} className="w-full h-64 object-cover hover:transition-all hover:-translate-y-1.5" />
        <div className="p-4">
          <h2 className="text-xs font-semibold">{name}</h2>
          <p className="text-gray-600">${price}</p>
        </div>
        <button className="bg-black w-full text-white font-medium p-2 hidden group-hover:block">Add</button>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,

};

export default ProductCard;

