import React, { useState } from "react";
import "./updateComment.scss";

const UpdateComment = (props) => {
  const [newCommentDescription, setNewComment] = useState(
    props.oldComment.comment_description
  );
  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = props.oldComment.id;
    props.handleUpdateCommentButton({ newCommentDescription, id });
    props.updatePostToggle();
    setNewComment("");
  };
  return (
    <form className="update-comment-wrapper" onSubmit={handleSubmit}>
      <div className="update-comment-field-wrapper">
        <input
          type="text"
          value={newCommentDescription}
          onChange={handleChange}
        />
        <input type="submit" value="Update" />
      </div>
    </form>
  );
};

export default UpdateComment;
