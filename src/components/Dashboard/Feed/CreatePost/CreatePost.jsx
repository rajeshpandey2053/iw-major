import React, { useState } from "react";
import "./createPost.scss";
import blankAvatarImage from "../../../../images/blank-profile-picture-973460_1280.webp";
// import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import AttachmentRoundedIcon from "@material-ui/icons/AttachmentRounded";
import { createPosts } from "../../../../redux/actions/PostAction";
import { connect } from "react-redux";

const CreatePost = (props) => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    event.preventDefault();
    // console.log('file', event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPosts({ caption, file });
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

        <div className="create-post-action-bar">
          <div>
            <div className="input-element">
              <label htmlFor="image">
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
    createPosts: (posts) => dispatch(createPosts(posts)),
  };
};

export default connect(null, mapDispatchToProps)(CreatePost);
