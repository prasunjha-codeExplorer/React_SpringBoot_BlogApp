import React from 'react'
import { useState,useEffect } from 'react'
import { getAllPosts,deletePost } from '../services/api'
import { Link } from 'react-router-dom';
import "./PostList.css";
import { toast } from "react-toastify";

const PostList = () => {
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  const [error,setError] = useState(null);


  const handleDelete = async(id) => {
      if(!window.confirm("Do you really wants to delete this post")){return;}
      try{
        await deletePost(id);
        toast.success("Post deleted successfully");
        setPosts((pre) => pre.filter((p) => p.id!==id));
      }catch{
         alert("Failed to delete post");
      }
      
  }
  const loadPosts = async() => {
      try{
          setLoading(true);
          const res = await getAllPosts();
          setPosts(res.data);
      }catch{
         setError("Failed to load posts");
      }finally{
        setLoading(false);
      }
  }
 

  // will run only one time
  useEffect(() => {
    loadPosts();
  },[]);

  if(loading) {
    return <p>Loading Posts....</p>
  }
  if(error){
    return <p>{error}</p>
  }

  return (
    <div className="posts-container">
    {posts.length === 0 ? (
      <div className="empty-state">
        <h2>No Posts Yet</h2>
        <p>Create your first blog post.</p>
      </div>
    ) : (
      posts.map((post) => (
        <div className="post-card" key={post.id}>
          <div className="post-header">
            <h2>{post.Title}</h2>
            <span className="author-badge">
              {post.author}
            </span>
          </div>

          <p className="post-content">
            {post.content}
          </p>

          <div className="post-actions">
            <Link
              to={`/edit/${post.id}`}
              className="edit-btn"
            >
              Edit
            </Link>

            <button
              className="delete-btn"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))
    )}
  </div>
  )
}

export default PostList
