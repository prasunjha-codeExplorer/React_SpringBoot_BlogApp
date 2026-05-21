import PostList from '../components/PostList'
import { Link }  from "react-router-dom";

const Home = () => {
  return (
    <div>
        <h1>Blog App</h1>
        <Link to="/create">+ create</Link>
        <PostList/>
    </div>
  )
}

export default Home
