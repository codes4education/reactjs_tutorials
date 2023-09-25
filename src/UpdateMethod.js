import React, { useState, useEffect } from "react";

function UpdateMethod() {
  const [postData, setPostData] = useState({
    id: 1,
    title: "",
    body: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postData.id}`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    // send the Put (update) request
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMessage("Post updated successfully.");
        console.log(data);
      })
      .catch((error) => {
        console.error("Error", error);
        setMessage("Error updating the post.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Load the initial post data when the component mounts
  useEffect(() => {
    const postId = postData.id;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [postData.id]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea name="body" value={postData.body} onChange={handleChange} />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </>
  );
}

export default UpdateMethod;
