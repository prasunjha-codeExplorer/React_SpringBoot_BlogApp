import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSinglePost, updatePost } from "../services/api";
import "./EditPost.css";
import { toast } from "react-toastify";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [posts, setPosts] = useState({
    Title: "",
    content: "",
    author: "",
  });

  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const loadPost = async () => {
    try {
      const res = await getSinglePost(id);
      setPosts(res.data);
    } catch {
      setError("Failed to load post.");
    }
  };

  useEffect(() => {
    loadPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !posts.Title.trim() ||
      !posts.content.trim() ||
      !posts.author.trim()
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      setSubmitting(true);
      await updatePost(posts, id);
      toast.success("Post updated successfully");
      navigate("/");
    } catch {
      setError("Failed to update post.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setPosts({
      ...posts,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="edit-page">
      <div className="edit-container">
        <div className="editor-header">
          <h1>📝 Edit Post</h1>
          <p>Update your article and save the changes.</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="Title"
              value={posts.Title}
              placeholder="Enter an engaging title..."
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={posts.author}
              placeholder="Enter author name..."
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Article Content</label>
            <textarea
              name="content"
              value={posts.content}
              placeholder="Update your content..."
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
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;