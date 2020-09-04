import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory, Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "../../../utils/axios";
import { likedPosts } from "../../../redux/actions/ProfileAction";

import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import InsertCommentRoundedIcon from "@material-ui/icons/InsertCommentRounded";
import SendSharpIcon from "@material-ui/icons/SendSharp";

import "./postDetail.scss";
import blankProfileImage from "../../../images/blank-profile-picture-973460_1280.webp";
import Comment from "./Comment/Comment";
import UpdatePost from "./UpdatePost/UpdatePost";
import { deletePost } from "../../../redux/actions/PostAction";

import Tag from "../Tag/Tag";
import Dashboard from "../Dashboard";

const PostDetail = props => {
  let params = useParams();
  //finding out which post's detail to display
  const post_data = props.postData.posts.filter(
    post => post.post_slug === params.postSlug
  );
  // if the post is already liked by user then display liked
  const defaultLikedState = props.likedPostsArray?.find(
    element => element === post_data[0]?.id
  );
  const [likesCount, setLikesCount] = useState(post_data[0]?.stars_count || 0);
  const [isLiked, setIsLiked] = useState(defaultLikedState ? true : false);
  const [commentText, setCommentText] = useState("");
  const [isUpdateSelected, setIsUpdateSelected] = useState(false);

  const [comments, setComments] = useState([]);

  const p_slug = params.postSlug;
  const history = useHistory();

  useEffect(() => {
    Axios.get(`/api/posts/v1/comment/${p_slug}/list/`)
      .then(response => {
        const fetched_comments = response.data.results;
        setComments(fetched_comments);
      })
      .catch(error => {
        console.log(error);
      });
  }, [p_slug]);
  const handleChange = event => {
    setCommentText(event.target.value);
  };

  const updatePostToggle = () => setIsUpdateSelected(!isUpdateSelected);

  const handlelikeButton = event => {
    if (!isLiked) {
      setLikesCount(likesCount + 1);
      props.likedPosts(params.postSlug, post_data[0]?.id, "like");
    } else {
      setLikesCount(likesCount - 1);
      props.likedPosts(params.postSlug, post_data[0]?.id, "unlike");
    }
    setIsLiked(!isLiked);
  };

  const handleSubmit = event => {
    event.preventDefault();
    Axios.post("/api/posts/v1/comment/create/", {
      user: post_data[0]?.user,
      post: post_data[0]?.id,
      comment_description: commentText,
    })
      .then(response => {
        const newcomment = response.data;
        setComments([newcomment, ...comments]);
      })
      .catch(error => {
        console.log(error);
      });
    // window.location.reload();
  };

  const handleDeletePostCLick = event => {
    props.deletePost(params.postSlug);
    //api pass post slug to delete
    //go back
    history.goBack();
  };

  let fileName;
  if (post_data[0]?.file) {
    const fileNameArr = post_data[0].file.split("/");
    fileName = fileNameArr[fileNameArr.length - 1];
  }

  const handleDeleteCommentButton = comment_id => {
    Axios.delete(`/api/posts/v1/comment/${comment_id}`)
      .then(response => {
        console.log(response.data);
        setComments(comments.filter(comm => comm.id !== comment_id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpdateCommentButton = updatedComment => {
    const newcomment = {
      user: post_data[0]?.user,
      post: post_data[0]?.id,
      comment_description: updatedComment.newCommentDescription,
    };
    Axios.put(`/api/posts/v1/comment/${updatedComment.id}/update/`, newcomment)
      .then(response => {
        console.log(response.data);
        setComments(
          comments.map(comm =>
            comm.id === updatedComment.id ? updatedComment : comm
          )
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Dashboard>
      <React.Fragment>
        <div className="post-detail">
          <div className="top-bar">
            <div className="top-bar__title">
              <button
                className="top-bar__title__back-btn"
                onClick={() => history.goBack()}>
                <ArrowBackIcon />
              </button>
              {props.profile?.profiles?.user?.username ===
              post_data[0]?.user_name ? (
                <div className="post-action-btns">
                  <button id="update" onClick={() => updatePostToggle()}>
                    Update
                  </button>
                  <button id="delete" onClick={handleDeletePostCLick}>
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          <div className="detail-wrapper">
            <div className="detail-title">
              <div className="detail-avatar">
                <img src={blankProfileImage} alt="Avatar" height={60} />
              </div>
              <div className="detail-title-info">
                <p className="info-description">
                  <Link to="/dashboard">{post_data[0]?.user_name}</Link> shared
                  a post.
                </p>
                <p className="info-timestamp">Aug 23, 13: 46</p>
              </div>
            </div>

            <div className="tags-wrapper">
              <Tag
                text={
                  post_data[0]?.education.university_name ||
                  "Tribhuwan University"
                }
              />
              <Tag
                text={
                  post_data[0]?.education.faculty_name ||
                  "Bachelor in Computer Engineering"
                }
              />
              <Tag text={post_data[0]?.education.semester || "III"} />
            </div>

            <div className="detail-info-wrapper">
              <div className="info-text">
                <p>{post_data[0]?.caption}</p>
                <p>
                  <a href={post_data[0]?.file} download>
                    {fileName}
                  </a>
                </p>
              </div>
            </div>

            <div className="details-action-bar">
              <div
                className="like-comment-btn"
                style={isLiked ? { color: "#6600fc" } : null}
                onClick={() => {
                  handlelikeButton();
                }}>
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
          <div className="comment">
            {comments.map(comm => (
              <Comment
                key={comm.id}
                comment={comm}
                handleDeleteCommentButton={handleDeleteCommentButton}
                handleUpdateCommentButton={handleUpdateCommentButton}
              />
            ))}
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
    </Dashboard>
  );
};

const mapStateToProps = state => {
  return {
    postData: state.post,
    profile: state.profile,
    likedPostsArray: state.profile?.likedposts,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deletePost: slug => dispatch(deletePost(slug)),
    likedPosts: (post_slug, post_id, action) =>
      dispatch(likedPosts(post_slug, post_id, action)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
