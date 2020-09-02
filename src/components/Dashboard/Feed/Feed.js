import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./feed.scss";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";
import { fetchPosts } from "../../../redux/actions/PostAction";
import Dashboard from "../Dashboard";

const Feed = ({ postData, fetchPosts }) => {
  const [readMore, setReadMore] = useState(false);
  // const [nextPageLink, setnextPageLink] = useState();
  return (
    <Dashboard>
      <div className="feed-wrapper">
        <CreatePost />
        {postData.posts &&
          postData.posts.map(post => <Post key={post.post_slug} post={post} />)}
        <div className="read-more-wrapper">
          {postData.nextPageLink ? (
            <button
              className="read-more-link"
              onClick={() => {
                setReadMore(!readMore);
                fetchPosts(postData?.nextPageLink);
              }}>
              Show More
            </button>
          ) : (
            <p className="text-center">That's all the feed you got.</p>
          )}
        </div>
      </div>
    </Dashboard>
  );
};

const mapStateToProps = state => {
  return {
    postData: state.post,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: pageLink => dispatch(fetchPosts(pageLink)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
