import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  return (
    <div>
       <BrowserRouter>
           <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path="/create" element={<CreatePost/>}/>
              <Route path='/edit/:id' element={<EditPost/>}></Route>
           </Routes>
                 <ToastContainer
        position="top-center"
        autoClose={6000}
      />

        </BrowserRouter>
    </div>
  )
}

export default App
