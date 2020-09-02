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
  const [newPost, setNewPost] = useState({
    caption: post_data[0]?.caption || "",
    file: post_data[0]?.file || null,
    education: {
      university: post_data[0]?.education?.university || "",
      semester: post_data[0]?.education?.semester || "",
      faculty: post_data[0]?.education?.faculty || "",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPosts(newPost, params.postSlug);
    props.updatePostToggle();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
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
          value={newPost.caption}
        />
      </div>

      <div className='file-field-wrapper'>
        <label htmlFor="file">Change file ? </label>
        <input type="file" name='file' onChange={handleChange} />
      </div>

      <div className="update-education-input-fields">
        <div>
          <select
            title="University"
            value={newPost.university}
            name="university"
            onChange={handleChange}
          >
            <option value={1}>Tribhuwan University</option>
            <option value={2}>Purbanchal University</option>
            <option value={3}>Pokhara University</option>
          </select>
        </div>
        <div>
          <select
            title="Faculty"
            value={newPost.faculty}
            name="faculty"
            onChange={handleChange}
          >
            <option value={1}>Bachelor in engineering</option>
            <option value={2}>Chartered Accountancy</option>
            <option value={3}>Bachelor in Business Administration</option>
          </select>
        </div>
        <div>
          <select
            title="Semester"
            value={newPost.semester}
            name="semester"
            onChange={handleChange}
          >
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
          </select>
        </div>
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
