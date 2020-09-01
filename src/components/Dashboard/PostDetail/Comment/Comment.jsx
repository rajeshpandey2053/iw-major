import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../../../../utils/axios";
import "./comment.scss";

import blankProfileImg from "../../../../images/blank-profile-picture-973460_1280.webp";
import UpdateComment from "./UpdateComment/UpdateComment";

const Comment = ({ comment }) => {
  console.log(comment);
  const [likesCount, setLikesCount] = useState(comment.stars_count);
  const [isUpdateSelected, setIsUpdateSelected] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeButton = (event) => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikesCount(likesCount + 1);
      Axios.post(`/api/posts/v1/comment/${comment.id}/like/`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setLikesCount(likesCount - 1);
      Axios.post(`/api/posts/v1/post/${comment.id}/unlike/`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const handleDeleteButton = (event) => {
    console.log("Deleted!");
  };

  return (
    <div className="comment-wrapper">
      <div className="comment-title">
        <div className="comment-avatar">
          <img src={blankProfileImg} alt="Comment avatar" height={35} />
        </div>
        <div className="commenter-details">
          <h6>
            <Link to="/dashboard">{comment.user_name}</Link>
          </h6>
          <p className="comment-description">{comment.comment_description}</p>
          {isUpdateSelected ? <UpdateComment /> : null}
          <div className="actions">
            <div>
              <button className="comment-like" onClick={handleLikeButton}>
                {isLiked ? "Unlike" : "Like"}
              </button>
              <button onClick={() => setIsUpdateSelected(!isUpdateSelected)}>
                {!isUpdateSelected ? "Update" : "Cancel"}
              </button>
              <button onClick={handleDeleteButton}>Delete</button>
            </div>
            <p>
              {likesCount} {likesCount === 1 ? "Like" : "Likes"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
