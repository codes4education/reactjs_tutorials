import React, { useState } from "react";
import "./App.css";
import UserCard from "./UserCard";

function App() {
  // Example 3
  const [name, setName] = useState("Bhaskar Gupta");

  // Example 2
  // const usersData = [
  //   { name: "John Doe", age: 25, email: "john.doe@example.com" },
  //   { name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
  //   { name: "Bob Johnson", age: 28, email: "bob.johnson@example.com" },
  // ];
  return (
    <>
      <div className="App">
        <h1>Props in React.</h1>

        <UserCard name={name} />

        {/* Example 3 */}
        <button onClick={() => setName("Code4education")}>Update Props</button>

        {/* Example 2 */}
        {/* {usersData.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            age={user.age}
            email={user.email}
          />
        ))} */}
      </div>
    </>
  );
}
export default App;
