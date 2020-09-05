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
  const [file, setFile] = useState(post_data[0]?.file);

  const handleFileChange = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
  };

  const initialEducationState = {
    university: post_data[0]?.education?.university || "",
    faculty: post_data[0]?.education?.faculty || "",
    semester: post_data[0]?.education?.semester || "",
  };
  const [education, setEducation] = useState(initialEducationState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = { caption, education, file };
    props.createPosts(post, params.postSlug);
    props.updatePostToggle();
  };

  const handleChange = (event) => {
    setCaption(event.target.value);
  };
  const handleEducationChange = (event) => {
    const { name, value } = event.target;
    setEducation({
      ...education,
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
          value={caption}
        />
      </div>

      <div className="file-field-wrapper">
        <label htmlFor="file">Change file ? </label>
        <input type="file" name="file" onChange={handleFileChange} />
      </div>

      <div className="update-education-input-fields">
        <div>
          <select
            title="University"
            value={education.university}
            name="university"
            onChange={handleEducationChange}
          >
            {props.profile.university.map((uni) => (
              <option value={uni.id}>{uni.university_name}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            title="Faculty"
            value={education.faculty}
            name="faculty"
            onChange={handleEducationChange}
          >
            {props.profile.faculty.map((fac) => (
              <option value={fac.id}>{fac.faculty_name}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            title="Semester"
            value={education.semester}
            name="semester"
            onChange={handleEducationChange}
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
    profile: state.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createPosts: (post, slug) => dispatch(createPosts(post, slug)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
