import React from 'react'
import { useState,useEffect } from 'react'
import { getAllPosts,deletePost } from '../services/api'
import { Link } from 'react-router-dom';

const PostList = () => {
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  const [error,setError] = useState(null);


  const handleDelete = async(id) => {
      if(!window.confirm("Do you really wants to delete this post")){return;}
      try{
        await deletePost(id);
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
    <div>
        {posts.map((post)=> (
           <div key={post.id}>
               <h1>{post.title}</h1>
               <h2>{post.content}</h2>
               <h3>BY: {post.author}</h3>

               <div>
                <Link to={`/edit/${post.id}`}>Edit</Link>
                <button
                    onClick={() => handleDelete(post.id)}
                >Delete</button>
               </div>
           </div>
        ))} 
    </div>
  )
}

export default PostList
