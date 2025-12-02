import { useState } from "react";
import axios from "axios";
import { formatMoney } from "../../utils/money";

// FIX 1: Destructure product and loadCart from the props object
export function Product({ product, loadCart }) {
    const [quantity, setQunatity] = useState(1);

    // FIX 2: Declare ratingStars here, as it's used in this component's JSX
    const ratingStars = product.rating?.stars || 0; 
    
    const addToCart = async () => {
          await axios.post("/api/cart-items", {
            productId: product.id,
            quantity
          });
          await loadCart();
        }
    const selectQuantity =(event) => {
            const qunatitySelected = Number(event.target.value);
            setQunatity(qunatitySelected);
          }

  return (
    <div className="product-container">
      <div className="product-image-container">
        {/* Use optional chaining to safely access product.image */}
        <img className="product-image" src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          // Use the safely calculated ratingStars variable
          src={`images/ratings/rating ${ratingStars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {/* Safely access count, default to 0 if missing */}
          {product.rating?.count || 0}
        </div>
      </div>

      <div className="product-price">{formatMoney(product.priceCents)}</div>

      <div className="product-quantity-container">
        <select
          value={quantity}
          // FIX 3: Pass the function reference, not the result of calling it (remove parentheses)
          onChange={selectQuantity} 
        >
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

      <button
        className="add-to-cart-button button-primary"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}