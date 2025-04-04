
import HeroSection from "../components/HeroSecton";

import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";
const Home = () => {


  
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios
      
        .get(`${import.meta.env.VITE_BASE_URL}/user/latest-products`)
        .then((response) => {
          setProducts(response.data.products); // Extract products array
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }, []);
  
  return (
    <>
    <HeroSection/> 
    <ProductList products={products} /> 
    <ProductList /> 
    </>
  );
};

export default Home;
