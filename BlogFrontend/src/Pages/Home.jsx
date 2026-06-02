import PostList from "../components/PostList";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="logo">BlogSphere</h1>

        <Link to="/create" className="create-btn">
          + New Post
        </Link>
      </nav>

      <section className="hero">
        <h1>Discover Amazing Stories</h1>

        <p>
          A place where developers and writers share
          knowledge, experiences, and ideas.
        </p>
      </section>

      <section className="posts-section">
        <PostList />
      </section>
    </div>
  );
};

export default Home;