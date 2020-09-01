import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./comment.scss";

import blankProfileImg from "../../../../images/blank-profile-picture-973460_1280.webp";
import UpdateComment from "./UpdateComment/UpdateComment";

const Comment = ({ comment }) => {
  const [likesCount, setLikesCount] = useState(comment.stars_count);
  const [isUpdateSelected, setIsUpdateSelected] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const BASE_URL = "http://127.0.0.1:8000/";
  const handleLikeButton = (event) => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikesCount(likesCount + 1);
      Axios.post(
        `${BASE_URL}api/posts/v1/comment/${comment.comment_id}/like/`,
        {
          headers: {
            Authorization: "Token 4eee293af83be3b61fb44d07282f89c2ec4d4bf1",
          },
        }
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setLikesCount(likesCount - 1);
      Axios.post(`${BASE_URL}api/posts/v1/post/${comment.comment_id}/unlike/`, {
        headers: {
          Authorization: "Token 4eee293af83be3b61fb44d07282f89c2ec4d4bf1",
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const handleDeleteButton = event => {
    console.log('Deleted!')
  }

  return (
    <div className="comment-wrapper">
      <div className="comment-title">
        <div className="comment-avatar">
          <img src={blankProfileImg} alt="Comment avatar" height={35} />
        </div>
        <div className="commenter-details">
          <h6>
            <Link to="/dashboard">{comment.username}</Link>
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
              <button onClick={handleDeleteButton}>
                Delete
              </button>
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
