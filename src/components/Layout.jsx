// components/Layout.jsx
import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content (Scrollable) */}
      <main className="flex-1 overflow-auto  mb-16">{children}</main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
