import React, { useState } from "react";
import "./updatePost.scss";

import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createPosts } from "../../../../redux/actions/PostAction";

const UpdatePost = (props) => {
  let params = useParams();
  const post_data = props.postData.posts.filter(
    (post) => post.post_slug === params.postSlug
  );
  const [caption, setCaption] = useState(post_data[0]?.caption || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ caption });
    const file = post_data[0]?.file;
    const post = { caption, file };
    props.createPosts(post, params.postSlug);
    props.updatePostToggle();
    setCaption("");
  };

  const handleChange = (event) => {
    setCaption(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="post-update-form-wrapper">
      <div className="update-form-title">
        <h5>Update post.</h5>
      </div>
      <div className="field-wrapper">
        <label htmlFor="caption" className="update-field-label">
          Caption
        </label>
        <textarea
          name="caption"
          id="caption"
          cols={30}
          rows={2}
          onChange={handleChange}
          value={caption}
        />
      </div>
      <div className="action-update-btns">
        <input type="submit" value="Update" className="update-btn" />
        <button
          type={`button`}
          id="cancel"
          onClick={() => props.updatePostToggle()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createPosts: (post, slug) => dispatch(createPosts(post, slug)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
