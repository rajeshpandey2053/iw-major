import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions/PostAction";

function PostComponent({ postData, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(postData);
  return postData.loading ? (
    <h2>Loading</h2>
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {postData &&
          postData.posts &&
          postData.posts.map((post, index) => (
            <p key={index}>{post.caption}</p>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);
