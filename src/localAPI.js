// api

import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// GET request
export const getPosts = () => {
  return axiosInstance.get("/posts");
};

// POST request
export const createPost = (postData) => {
  return axiosInstance.post("/posts", postData);
};

// PUT request
export const updatePost = (postId, updateData) => {
  return axiosInstance.put(`/posts/${postId}`, updateData);
};

// DELETE request
export const deletePost = (postId) => {
  return axiosInstance.delete(`/posts/${postId}`);
};
