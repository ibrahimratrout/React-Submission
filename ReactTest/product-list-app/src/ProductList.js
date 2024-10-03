import React from 'react';

const ProductList = ({ products, onFilterChange }) => {
  return (
    <div>
      <section className="filter-section">
        <button className="filter-button" onClick={() => onFilterChange("all")}>All</button>
        <button className="filter-button" onClick={() => onFilterChange("Electronics")}>Electronics</button>
        <button className="filter-button" onClick={() => onFilterChange("Clothing")}>Clothing</button>
        <button className="filter-button" onClick={() => onFilterChange("Home")}>Home</button>
      </section>

      <section className="product-display-area">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-card">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p className="no-products-message">No products available</p>
        )}
      </section>
    </div>
  );
};

export default ProductList;
