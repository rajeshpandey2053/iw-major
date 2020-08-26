import React, { useState } from "react";
import "./comment.scss";
import { Link } from "react-router-dom";

import blankProfileImg from "../../../../images/blank-profile-picture-973460_1280.webp";

const Comment = (props) => {
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

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
              <button
                className="comment-like"
                onClick={() => {
                  setIsLiked(!isLiked);
                  isLiked
                    ? setLikesCount(likesCount - 1)
                    : setLikesCount(likesCount + 1);
                }}
              >
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
