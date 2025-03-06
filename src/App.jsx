import "./App.css";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import PrivateRoute from "./components/PrivateRoutes";
import Layout from "./components/Layout"; // Import the Layout component
import ContactPage from "./page/ContactPage";
import About from "./page/About";
import CollectionPage from "./page/CollectionPage";
import ProductDetail from "./page/ProductDetail";
import CartPage from "./page/CartPage";

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
          <PrivateRoute>
            <Layout>
              <Home />
              
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <Layout>
              <ContactPage />
              
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <Layout>
              <About /> 
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/collection"
        element={
          <PrivateRoute>
            <Layout>
              <CollectionPage /> 
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/detail"
        element={
          <PrivateRoute>
            <Layout>
              <ProductDetail /> 
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Layout>
              <CartPage /> 
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
