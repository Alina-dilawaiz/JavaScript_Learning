import { Product } from "./Product";

// FIX 1: Destructure products and loadCart from the props object
export function ProductsGrid({ products, loadCart }) {
  return (
    <div className="products-grid">
      {/* Use conditional rendering: Render loading message or null until products are fetched */}
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => {
          return (
            <Product key={product.id} product={product} loadCart={loadCart} />
          );
        })
      )}
    </div>
  );
}
