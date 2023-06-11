import axios from "axios";

const url = "https://todo-backend-mern-stack.vercel.app/posts";

export const fetchPosts = () => axios.get(url);

const config = {
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
};

export const createPost = (newPost) => axios.post(url, newPost, config);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
