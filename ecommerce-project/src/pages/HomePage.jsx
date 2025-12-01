import axios from 'axios';
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
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
        <div className="products-grid">
          {/* Use conditional rendering: Render loading message or null until products are fetched */}
          {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => {
              // Safely get rating stars, default to 0 if product.rating or product.rating.stars is missing
              const ratingStars = product.rating?.stars || 0;
              
              return (
                // Add a check to ensure product.id exists before creating the key
                <div key={product.id || Math.random()} className="product-container">
                  <div className="product-image-container">
                    {/* Use optional chaining to safely access product.image */}
                    <img className="product-image" src={product.image} />
                  </div>

                  <div className="product-name limit-text-to-2-lines">
                    {product.name}
                  </div>

                  <div className="product-rating-container">
                    <img
                      className="product-rating-stars"
                      // Use the safely calculated ratingStars variable
                      src={`images/ratings/rating ${
                        ratingStars * 10
                      }.png`}
                    />
                    <div className="product-rating-count link-primary">
                      {/* Safely access count, default to 0 if missing */}
                      {product.rating?.count || 0}
                    </div>
                  </div>

                  <div className="product-price">
                    {/* Safely access priceCents, default to 0 if missing */}
                    ${((product.priceCents || 0) / 100).toFixed(2)}
                  </div>

                  <div className="product-quantity-container">
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <div className="product-spacer"></div>

                  <div className="added-to-cart">
                    <img src="images/icons/checkmark.png" />
                    Added
                  </div>

                  <button className="add-to-cart-button button-primary">
                    Add to Cart
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}