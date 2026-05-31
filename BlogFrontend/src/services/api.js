import axios from 'axios';


const API = "http://localhost:8080/api/posts";

export const getAllPosts=()=>{
   return axios.get(API);
}

export const getSinglePost=(id)=>{
   return axios.get(`${API}/${id}`);
}

export const createPost=(Data)=>{
   return axios.post(API,Data);
}

export const deletePost=(id)=>{
   return axios.delete(`${API}/${id}`)
}

export const updatePost=(Data,id)=>{
   return axios.put(`${API}/${id}`,Data);
}