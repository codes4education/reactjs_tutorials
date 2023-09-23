import React, { useState } from "react";

function PostMethod() {
  // UseState
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    // Create the request object
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    // Send the POST request
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log("Response Data:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea name="body" value={formData.body} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default PostMethod;
