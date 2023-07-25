import React from "react";
import "./App.css";

function App() {
  // Example 1
  const names = ["Alice", "Bob", "Charlie", "Bhaskar"];

  // Exmaple 2 Array of Objects
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
    },
    {
      id: 4,
      name: "Product 4",
      price: 40,
    },
  ];

  // Example 3 return map function
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  // Using map to tranform the array of fruits into an array of react elements
  const fruitItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

  return (
    <>
      <div className="App">
        <h1>Array With Map Function.</h1>

        {/* Example 1 */}
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>

        {/* Example 2 */}
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>

        {/* Example 3 */}
        <ul>{fruitItems}</ul>
      </div>
    </>
  );
}
export default App;
