import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./comment.scss";

import blankProfileImg from "../../../../images/blank-profile-picture-973460_1280.webp";

const Comment = (props) => {
  const [likesCount, setLikesCount] = useState(props.stars_count);
  const [isLiked, setIsLiked] = useState(false);
  const handlelikeButton = (event) => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikesCount(likesCount + 1);
      Axios.post(
        `http://127.0.0.1:8000/api/posts/v1/comment/${props.comment_id}/like/`
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setLikesCount(likesCount - 1);
      Axios.post(
        `http://127.0.0.1:8000/api/posts/v1/post/${props.comment_id}/unlike/`
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div className="comment-wrapper">
      <div className="comment-title">
        <div className="comment-avatar">
          <img src={blankProfileImg} alt="Comment avatar" height={35} />
        </div>
        <div className="commenter-details">
          <h6>
            <Link to="/dashboard">{props.username}</Link>
          </h6>
          <p className="comment-description">{props.comment_description}</p>
          <div className="actions">
            <p>
              <button className="comment-like" onClick={handlelikeButton}>
                {isLiked ? "Unlike" : "Like"}
              </button>{" "}
              {likesCount} {likesCount === 1 ? "Like" : "Likes"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
