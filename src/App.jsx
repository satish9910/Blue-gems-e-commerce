import "./App.css";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
// import PrivateRoute from "./components/PrivateRoutes";
import Layout from "./components/Layout"; // Import the Layout component
import ContactPage from "./page/ContactPage";
import About from "./page/About";
import CollectionPage from "./page/CollectionPage";
import ProductDetail from "./page/ProductDetail";
import CartPage from "./page/CartPage";
import AdminLogin from "./admin/Admin-login";
import AddItem from "./admin/AddItem";
import AdminLayout from "./components/admin-components/AdminLayout";
import ProductList from "./admin/ProductList";

function App() {
  return (
    <Routes>
      {/* No layout for login & signup */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      {/* Wrap the main pages inside Layout */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/collection"
        element={
          <Layout>
            <CollectionPage />
          </Layout>
        }
      />
      <Route
        path="/detail"
        element={
          <Layout>
            <ProductDetail />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <CartPage />
          </Layout>
        }
      />

      {/* Admin Routes */}

     <Route path="/admin/login" element={<AdminLogin />} />
     <Route path="/admin/dashboard" element={
      <AdminLayout>
      <AddItem />
      </AdminLayout>
      } />
     <Route path="/admin/product-list" element={
      <AdminLayout>
      <ProductList/>
      </AdminLayout>
      } />
    </Routes>

  );
}

export default App;
