import React, { useEffect, useState } from "react";
import { getPosts, createPost, updatePost, deletePost } from "./localAPI";

function GetDataAPI() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  // Get Request
  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  //   Create Request
  const handleCreatePost = () => {
    createPost(newPost)
      .then((response) => {
        setPosts([...posts, response.data]);
        setNewPost({ title: "", body: "" });
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  //   Update Post
  const handleUpdatePost = (postId, updatedData) => {
    updatePost(postId, updatedData)
      .then((response) => {
        // Update the state with the updated post
        const updatedPosts = posts.map((post) =>
          post.id === postId ? response.data : post
        );
        setPosts(updatedPosts);
        console.log(updatedPosts);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  //   Delete Request
  const handleDeletePost = (postId) => {
    deletePost(postId)
      .then(() => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button
              onClick={() =>
                handleUpdatePost(post.id, {
                  title: "Updated Title",
                  body: "Updated Body",
                })
              }
            >
              Update
            </button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <hr />

      <br />
      <br />

      <h2>Create New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={handleCreatePost}>Create</button>
    </>
  );
}

export default GetDataAPI;
