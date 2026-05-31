import React, { useState } from 'react'

const CreatePost = () => {
   const [posts,setPosts] = useState([])
  function handleSubmit(){

  }

   const handleChange = (e) => {
        setPosts(e.name);
        setPosts(e.placeholder);
   }

  return (
    <div>
       <form onSubmit={handleSubmit}>
         <h1>Create New Post</h1>
         <div>
             <label>Title</label>
             <input
              type='text'
              name='title'
              placeholder='Enter your Title: '
              onChange={handleChange}
              required
              ></input>
         </div>

         <div>
            <label>Content</label>
            <input
            type='text'
            name='content'
            placeholder='Enter your Content: '
            onChange={handleChange}
            required
            ></input>
         </div>

         <div>
            <label>Author</label>
            <input
             type='text'
             name='author'
             placeholder='Enter Author name: '
             onChange={handleChange}
             required
            ></input>
         </div>
       </form>
    </div>
  )
}

export default CreatePost
