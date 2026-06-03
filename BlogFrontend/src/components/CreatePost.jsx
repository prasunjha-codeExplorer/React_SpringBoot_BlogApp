import React, { useState } from 'react'
import { createPost, updatePost } from '../services/api';
import "./CreatePost.css";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
   const [posts,setPosts] = useState({
      Title:"",
      content:"",
      author:""
   });
   const [error,setError] = useState(null);
   const [submitting,setSubmitting] = useState(false);
   const navigate = useNavigate();

   //Submit form
   const handleSubmit=async(e)=>{
      e.preventDefault();
      if(posts.Title.length === 0 || posts.content.length === 0 || posts.author.length === 0){
         toast.warning("All fields are required");
         return;
      }
      try{
         setSubmitting(true);
         await createPost(posts);
         navigate("/");
         toast.success("Post created successfully");
      }catch{
         setError("Failed to created Post");
      }finally{
         setSubmitting(false);
      }
   }


  //Handle form
   const handleChange = (e) => {
      setPosts({...posts,[e.target.name]:e.target.value});
   }

   return (
  <div className="create-page">
    <div className="editor-container">
      <div className="editor-header">
        <h1>Create New Post</h1>
        <p>Share your thoughts with the world</p>
      </div>

      {error && (
        <div className="error-box">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Title</label>
          <input
            type="text"
            name="Title"
            placeholder="Enter an attractive title..."
            onChange={handleChange}
            value={posts.Title}
          />
        </div>

        <div className="input-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            placeholder="Who is writing this?"
            onChange={handleChange}
            value={posts.author}
          />
        </div>

        <div className="input-group">
          <label>Content</label>
          <textarea
            name="content"
            rows="12"
            placeholder="Start writing your blog here..."
            onChange={handleChange}
            value={posts.content}
          />
        </div>

        <div className="action-buttons">
          <button
            type="submit"
            className="publish-btn"
            disabled={submitting}
          >
            {submitting
              ? "Publishing..."
              : "🚀 Publish Post"}
          </button>
        </div>
      </form>
    </div>
  </div>
);
}

export default CreatePost
