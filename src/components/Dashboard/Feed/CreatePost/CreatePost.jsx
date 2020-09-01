import React, { useState } from "react";
import "./createPost.scss";
import blankAvatarImage from "../../../../images/blank-profile-picture-973460_1280.webp";
import AttachmentRoundedIcon from "@material-ui/icons/AttachmentRounded";
import { createPosts } from "../../../../redux/actions/PostAction";
import { connect } from "react-redux";

const CreatePost = (props) => {
  const [caption, setCaption] = useState("");
  const [education, setEducation] = useState({
    university: 2,
    faculty: 2,
    semester: "III",
  });
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    setCaption(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    console.log({ education });
    event.preventDefault();
    const post = { caption, education, file };
    props.createPosts(post);
    setEducation({
      university: "TU",
      faculty: "BE",
      semester: 1,
    });
    setCaption("");
    setFile(null);
    // window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="create-post-wrapper">
        <div className="create-post-form">
          <div className="create-post-avatar">
            <img src={blankAvatarImage} height={100} alt="Avatar" />
          </div>
          <div className="input-section">
            <textarea
              name="caption"
              id="caption"
              cols={30}
              rows={2}
              placeholder="Want to share something?"
              onChange={handleInputChange}
              value={caption}
            />
          </div>
        </div>
        <div className="education-input-fields">
          <div>
            <select
              title="University"
              value={education.university}
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
              value={education.faculty}
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
              value={education.semester}
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

        <div className="create-post-action-bar">
          <div>
            <div className="input-element">
              <label htmlFor="image" title="Attach File">
                <AttachmentRoundedIcon />
              </label>
              <input
                type="file"
                alt="hello"
                id="image"
                name="image"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="post-button">
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPosts: (post) => dispatch(createPosts(post)),
  };
};

export default connect(null, mapDispatchToProps)(CreatePost);
