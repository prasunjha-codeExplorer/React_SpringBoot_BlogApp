import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllPosts, getSinglePost, updatePost } from '../services/api';
import "./EditPost.css";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState({
    Title: "",
    content: "",
    author: ""
  });
  const [error,setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const loadPosts = async () => {
    try {
      const res = await getSinglePost(id);
      setPosts(res.data);
    } catch {
      setError("Failed to load posts");
    } 
  }
  useEffect(() => {
    loadPosts();
  },[id])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await updatePost(posts,id);
      navigate("/");
    } catch {
      setError("Failed to update Post");
    } finally {
      setSubmitting(false);
    }
  }
  const handleChange = (e) => {
    setPosts({ ...posts, [e.target.name]: e.target.value });
  }


  const handlePage=()=>{
     navigate("/");
  }


  return (
    <div className="edit-post-container">
    <form className="edit-post-form" onSubmit={handleSubmit}>
      <h1>Edit Post</h1>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="Title"
          value={posts.Title}
          placeholder="Enter your title"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Content</label>
        <textarea
          name="content"
          value={posts.content}
          placeholder="Update your content"
          rows="6"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={posts.author}
          placeholder="Author name"
          onChange={handleChange}
        />
      </div>

      <div className="button-group">
        <button
          type="submit"
          className="update-btn"
          disabled={submitting}
        >
          {submitting
            ? "Updating..."
            : "Update Post"}
        </button>

        <button
          type="button"
          className="cancel-btn"
          onClick={handlePage}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
  )
}

export default EditPost
