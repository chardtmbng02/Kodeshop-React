import { useState } from 'react';
import './App.css';
import { ProductList } from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  function fetchProductsHandler() {
    fetch('http://localhost:8000/products?_sort=price&_order=asc')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newProducts = data.map((productData) => {
          return {
            id: productData.id,
            name: productData.name,
            price: productData.price,
            in_stock: productData.in_stock,
          };
        });
        setProducts(newProducts);
      })
      .catch((error) => console.log(error));
  }

  function instockHandler() {
    fetch('http://localhost:8000/products?in_stock=true')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newProducts = data.map((productData) => {
          return {
            id: productData.id,
            name: productData.name,
            price: productData.price,
            in_stock: productData.in_stock,
          };
        });
        setProducts(newProducts);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <h1>Product List</h1>
      <button onClick={fetchProductsHandler}>All</button>
      <button onClick={instockHandler}>In Stock</button>
      <ProductList products={products} />
    </div>
  );
}

export default App;
