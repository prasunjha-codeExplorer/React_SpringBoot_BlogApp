import PostList from "../components/PostList";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to BlogSphere</h1>

          <p>
            Discover articles about Software Engineering,
            Spring Boot, React, System Design, and more.
          </p>

          <Link
            to="/create"
            className="create-post-btn"
          >
            Start Writing
          </Link>
        </div>
      </header>

      <section className="posts-wrapper">
        <div className="posts-container">
          <h2 className="section-title">
            Latest Articles
          </h2>

          <PostList />
        </div>
      </section>
    </div>
  );
};

export default Home;