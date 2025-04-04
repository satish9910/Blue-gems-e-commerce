import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-4">
      <h2 className="text-xl font-bold text-gray-800">FOREVER</h2>
      <p className="text-sm text-gray-500 mb-4">ADMIN PANEL</p>
      <ul className="space-y-2">
        <li>
          <Link to="/admin/dashboard" className="block p-2 bg-pink-200 text-gray-800 rounded">
            ➕ Add Items
          </Link>
        </li>
        <li>
          <Link to="/admin/product-list" className="block p-2 bg-white text-gray-800 rounded border">
            📋 List Items
          </Link>
        </li>
        <li>
          <Link to="/orders" className="block p-2 bg-white text-gray-800 rounded border">
            📦 Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
