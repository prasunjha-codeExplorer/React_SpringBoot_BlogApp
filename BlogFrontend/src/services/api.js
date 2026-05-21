import axios from 'axios';


const API = "http://localhost:8080//api/posts";

export const getAllPosts=()=>{
    axios.get(API);
}

export const getSinglePost=(id)=>{
    axios.get(`${API}/${id}`);
}

export const createPost=(Data)=>{
    axios.post(`${API}/${createPost}`,Data);
}

export const deletePost=(id)=>{
    axios.delete(`${API}/${deletePost}/${id}`)
}

export const updatePost=(Data,id)=>{
    axios.put(`${API}/${update}/${id}`,Data);
}