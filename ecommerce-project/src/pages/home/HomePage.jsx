import axios from 'axios';
import { ProductsGrid } from './ProductsGrid';
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);
  
  //1st: name of data
  //2nd: Updates data, regenerates data
  useEffect(() => {
    // Basic error handling added to catch failed API requests
    axios.get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  });

  
  return (
    <>
      <Header cart={cart} />
      <title>Ecommerce Project</title>

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}