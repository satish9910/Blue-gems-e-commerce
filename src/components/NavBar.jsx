import { useState } from "react";
import { Menu, X,  User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="w-[80%] mx-auto  flex justify-between items-center py-5">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span>BLU-GEMS</span>
          <span className="text-pink-500">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm leading-2">
          <Link to="/">
          <li className="hover:text-pink-500 font-semibold text-gray-600 cursor-pointer">HOME</li>
          </Link>
          <Link to="/collection">
          <li className="hover:text-pink-500 font-semibold text-gray-600 cursor-pointer">COLLECTION</li>
          </Link>
          <Link to="/about">
             <li className="hover:text-pink-500 font-semibold text-gray-600 cursor-pointer">ABOUT</li>
          </Link>
           <Link to="/contact">
          <li className="hover:text-pink-500 font-semibold text-gray-600 cursor-pointer">CONTACT</li>
          </Link>
        </ul>

        {/* Right Section: Admin Button & Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* <button className="border px-4 py-2 rounded-full hover:bg-gray-100">
            Admin Panel
          </button> */}
          {/* <Search className="w-6 h-6 cursor-pointer hover:text-pink-500" /> */}
          <User className="w-6 h-6 cursor-pointer hover:text-pink-500" />
          <Link to="/cart">
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-pink-500" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md space-y-4 py-4 text-center">
          <li className="hover:text-pink-500 cursor-pointer">HOME</li>
          <li className="hover:text-pink-500 cursor-pointer">COLLECTION</li>
          <li className="hover:text-pink-500 cursor-pointer">ABOUT</li>
          <li className="hover:text-pink-500 cursor-pointer">CONTACT</li>
          <button className="border px-4 py-2 rounded-full hover:bg-gray-100 mt-2">
            Admin Panel
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
