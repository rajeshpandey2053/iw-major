import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory, Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";

import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import InsertCommentRoundedIcon from "@material-ui/icons/InsertCommentRounded";
import SendSharpIcon from "@material-ui/icons/SendSharp";

import "./postDetail.scss";
import blankProfileImage from "../../../images/blank-profile-picture-973460_1280.webp";
import Comment from "./Comment/Comment";
import UpdatePost from "./UpdatePost/UpdatePost";

const PostDetail = (props) => {
  let params = useParams();
  const post_data = props.postData.posts.filter(
    (post) => post.post_slug === params.postSlug
  );
  const [likesCount, setLikesCount] = useState(post_data[0]?.stars_count || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isUpdateSelected, setIsUpdateSelected] = useState(false);

  const [comments, setComments] = useState([]);
  const history = useHistory();
  const BASE_URL = "http://127.0.0.1:8000/";
  useEffect(() => {
    Axios.get(`${BASE_URL}api/posts/v1/comment/${params.postSlug}/list/`, {
      headers: {
        Authorization: "Token 4eee293af83be3b61fb44d07282f89c2ec4d4bf1",
      },
    })
      .then((response) => {
        const fetched_comments = response.data.results;
        setComments(fetched_comments);
        console.log(comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (event) => {
    setCommentText(event.target.value);
  };

  const updatePostToggle = () => setIsUpdateSelected(!isUpdateSelected);

  const handlelikeButton = (event) => {
    if (!isLiked) {
      setLikesCount(likesCount + 1);
      Axios.post(`${BASE_URL}api/posts/v1/post/${params.postSlug}/like/`, {
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
    } else {
      setLikesCount(likesCount - 1);
      Axios.post(`${BASE_URL}api/posts/v1/post/${params.postSlug}/unlike/`, {
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
    setIsLiked(!isLiked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(
      `${BASE_URL}api/posts/v1/comment/create/`,
      {
        user: post_data[0]?.user,
        post: post_data[0]?.id,
        comment_description: commentText,
      },
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
        console.log(error);
      });
    window.location.reload();
  };

  return (
    <React.Fragment>
      <div className="post-detail">
        <div className="top-bar">
          <div className="top-bar__title">
            <button
              className="top-bar__title__back-btn"
              onClick={() => history.goBack()}
            >
              <ArrowBackIcon />
            </button>
            <div className="post-action-btns">
              <button id="update" onClick={() => updatePostToggle()}>
                Update
              </button>
              <button id="delete">Delete</button>
            </div>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail-title">
            <div className="detail-avatar">
              <img src={blankProfileImage} alt="Avatar" height={60} />
            </div>
            <div className="detail-title-info">
              <p className="info-description">
                <Link to="/dashboard">{post_data[0]?.user_name}</Link> shared a
                post.
              </p>
              <p className="info-timestamp">Aug 23, 13: 46</p>
            </div>
          </div>

          <div className="detail-info-wrapper">
            <div className="info-text">
              <p>{post_data[0]?.caption}</p>
            </div>
          </div>

          <div className="details-action-bar">
            <div
              className="like-comment-btn"
              style={isLiked ? { color: "#6600fc" } : null}
              onClick={() => {
                handlelikeButton();
              }}
            >
              {!isLiked ? (
                <>
                  <FavoriteBorderSharpIcon /> Like
                </>
              ) : (
                <>
                  <FavoriteSharpIcon /> Unlike
                </>
              )}
              ;
            </div>
            <div className="like-comment-btn">
              <label htmlFor="new-comment">
                <InsertCommentRoundedIcon /> Comment
              </label>
            </div>
          </div>
        </div>

        <div className="update-post-section">
          {isUpdateSelected ? (
            <UpdatePost updatePostToggle={updatePostToggle} />
          ) : null}
        </div>

        <div className="comment-section">
          <div className="comment-count">
            <p>{comments.length} comments</p>
          </div>
          <div className="comment">
            {comments.map((comm) => (
              <Comment
                key={comm.commented_at}
                comment_description={comm.comment_description}
                username={comm.user_name}
                post_id={comm.post}
                created_at={comm.commented_at}
                comment_id={comm.id}
                stars_count={comm.stars_count}
              />
            ))}
          </div>
        </div>

        <div className="create-comment-section">
          <form onSubmit={handleSubmit}>
            <div className="create-comment">
              <div className="comment-input-wrapper">
                <input
                  type="text"
                  onChange={handleChange}
                  value={commentText}
                  id="new-comment"
                  placeholder="Like the post? Tell here..."
                />
              </div>
              <button type="submit">
                <SendSharpIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};

export default connect(mapStateToProps)(PostDetail);
