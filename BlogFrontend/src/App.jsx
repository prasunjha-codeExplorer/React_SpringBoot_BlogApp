import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
const App = () => {
  return (
    <div>
       <BrowserRouter>
           <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path="/create" element={<CreatePost/>}/>
              <Route path='update:id' element={<EditPost/>}></Route>
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
