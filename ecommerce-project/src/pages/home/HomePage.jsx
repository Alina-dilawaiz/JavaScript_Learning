import axios from "axios";
import { ProductsGrid } from "./ProductsGrid";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  //1st: name of data
  //2nd: Updates data, regenerates data
  useEffect(() => {
    const getHomeData = async () =>{
         const response = await axios.get("/api/products");
    setProducts(response.data);
    };

    getHomeData();
  }, []);

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
