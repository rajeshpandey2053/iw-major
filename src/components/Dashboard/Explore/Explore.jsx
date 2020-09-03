import React from "react";
import "./explore.scss";
import Dashboard from "../Dashboard";
import Post from "../Feed/Post/Post";

const Explore = props => {
  const [query, setQuery] = React.useState("");

  // just a post mock
  const [post, setPost] = React.useState({
    user_name: "anjalbam12",
    education: {
      university_name: "Tribhuwan University",
      faculty_name: "Electronics Engineering",
      semester: "III",
    },
    caption: "This is an example post just for placeholder purposes.",
    file: null,
    post_slug: "new-post",
  });

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(query);
  };

  return (
    <Dashboard>
      <div className="explore-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="explore-header">
            <div className="explore-title">
              <h2>Search for various posts here.</h2>
            </div>
            <div className="search-bar-wrapper">
              <div className="search-bar">
                <input
                  type="text"
                  name="query"
                  id="query"
                  onChange={handleChange}
                  placeholder="Search Here..."
                />
              </div>
              <button className="submit-btn" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
        <div>
          <Post post={post} />
        </div>
      </div>
    </Dashboard>
  );
};

export default Explore;
