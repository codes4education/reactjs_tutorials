import React from "react";
import "./App.css";
import { Table, Container, Row, Col } from "react-bootstrap";

function App() {
  // Example 1
  const countriesWithCities = [
    {
      country: "USA",
      cities: ["New York", "Los Angeles", "Chicago"],
    },
    {
      country: "Canada",
      cities: ["Toronto", "Vancouver", "Montreal"],
    },
    {
      country: "UK",
      cities: ["London", "Manchester", "Birmingham"],
    },
  ];

  // Example 2
  const nestedData = [
    { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
    { category: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
    { category: "Drinks", items: ["Water", "Juice", "Tea", "Coffee"] },
  ];
  return (
    <>
      <div className="App">
        <h1>Nested Map Function In React.</h1>

        {/* Example 1 */}
        <ul>
          {countriesWithCities.map((countryObj, index) => (
            <li key={index}>
              <b>{countryObj.country}</b>
              <ul>
                {countryObj.cities.map((city, cityIndex) => (
                  <li key={cityIndex}>{city}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Example 2 */}
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Table className="table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Items</th>
                  </tr>
                </thead>
                <tbody>
                  {nestedData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.category}</td>
                      <td>
                        <ul className="list-unstyled">
                          {data.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default App;
