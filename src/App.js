import React from "react";
import "./App.css";

import Table from "react-bootstrap/Table";

function App() {
  // Example 1
  const tableData = [
    { id: 1, name: "John Doe", age: 25, location: "New York" },
    { id: 2, name: "Jane Smith", age: 25, location: "London" },
    { id: 3, name: "Amit Kumar", age: 20, location: "India" },
    { id: 4, name: "John Wick", age: 28, location: "USA" },
    // Add more data here if needed
  ];

  return (
    <>
      <div className="App">
        <h1>Bootstrap Table In React.</h1>

        <div>
          <Table striped="columns" responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) =>
                data.age === 25 ? (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.location}</td>
                  </tr>
                ) : null
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
export default App;
