import React, { useState } from 'react';
import ProductList from './ProductList';  // Import the ProductList component
import './styles.css';  // Import the CSS file

const App = () => {
  const products = [
    { name: "Smartphone", category: "Electronics", price: 44 },
    { name: "Laptop", category: "Electronics", price: 633 },
    { name: "T-Shirt", category: "Clothing", price: 11.99 },
    { name: "Jeans", category: "Clothing", price: 59.99 },
    { name: "Blender", category: "Home", price: 99.99 },
    { name: "Microwave", category: "Home", price: 79.99 },
  ];

  const [filterCategory, setFilterCategory] = useState("all");

  const filteredProducts = products.filter(product =>
    filterCategory === "all" || product.category === filterCategory
  );

  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  return (
    <div>
      <header>
        <h1>Product List</h1>
      </header>
      <ProductList 
        products={filteredProducts} 
        onFilterChange={handleFilterChange} 
      />
    </div>
  );
};

export default App;
