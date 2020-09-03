import React, { useState } from "react";
import "./createPost.scss";
import blankAvatarImage from "../../../../images/blank-profile-picture-973460_1280.webp";
import AttachmentRoundedIcon from "@material-ui/icons/AttachmentRounded";
import { createPosts } from "../../../../redux/actions/PostAction";
import { connect } from "react-redux";
import { Snackbar } from "@material-ui/core";

const CreatePost = ({ posts, createPosts }) => {
  const initialEducationState = {
    university: 2,
    faculty: 2,
    semester: "I",
  };
  const [caption, setCaption] = useState("");
  const [education, setEducation] = useState(initialEducationState);
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);

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
    createPosts(post);
    setOpen(true);
    setEducation(initialEducationState);
    setCaption("");
    setFile(null);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        message="Post has been created"
      />
      <div className="create-post-wrapper">
        <div className="create-post-form">
          <div className="create-post-avatar">
            <img src={blankAvatarImage} height={100} alt="Avatar" />
          </div>
          <div className="input-section">
            <textarea
              name="caption"
              required
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
                required
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
const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createPosts: (post) => dispatch(createPosts(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
