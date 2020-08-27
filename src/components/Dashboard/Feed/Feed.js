import React from "react";
import { connect } from "react-redux";
import "./feed.scss";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

const Feed = ({ postData }) => {
  console.log("hello1");
  return (
    <div className="feed-wrapper">
      <CreatePost />
      {postData.posts.map((post) => (
        <Post
          key={post.post_slug}
          caption={post.caption}
          username={post.user_name}
          slug={post.post_slug}
          created_at={post.created_at}
          stars_count={post.stars_count}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};

export default connect(mapStateToProps)(Feed);
