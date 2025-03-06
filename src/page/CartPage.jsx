import { Trash } from "lucide-react";

const CartPage = () => {
  return (
    <div className="w-[80%] mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold">YOUR CART</h2>
    
        <div className="w-full  p-4 mb-5 ">
          <div className="flex items-center gap-4 border-b border-t border-gray-300 py-4">
            <img
              src="https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <p className="font-medium">Kid Tapered Slim Fit Trouser</p>
              <p className="text-gray-600">$38</p>
              <span className="border px-2 py-1 rounded text-sm">S</span>
            </div>
            <input
              type="number"
              min="1"
              value="1"
              className="w-12 border rounded text-center"
            />
            <button className="text-red-500 hover:text-red-700">
              <Trash size={18} />
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0 p-4 float-right ">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-2">CART TOTALS</h3>
          <div className="mt-4">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>$38.00</span>
            </div>
            <div className="flex justify-between text-gray-700 mt-2">
              <span>Shipping Fee</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>Total</span>
              <span>$48.00</span>
            </div>
            <button className="w-full mt-4 bg-black text-white py-2  hover:bg-gray-800">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
 
  );
};

export default CartPage;
