import React, { useState } from "react";
import "./post.scss";

import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import Axios from "axios";
import Tag from "../../Tag/Tag";

import blankProfileImg from "../../../../images/blank-profile-picture-973460_1280.webp";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import InsertCommentRoundedIcon from "@material-ui/icons/InsertCommentRounded";

const Post = (props) => {
  const { post, profileData } = props;
  // if the post is already liked by user then display liked
  const defaultLikedState = profileData?.profiles?.user?.profile?.post.find(
    (element) => element === post.id
  );
  const { path } = useRouteMatch();
  const [isLiked, setIsLiked] = useState(defaultLikedState ? true : false);
  const [likesCount, setLikesCount] = useState(post?.stars_count || 0);
  let fileName;
  if (post?.file) {
    const fileNameArr = post.file.split("/");
    fileName = fileNameArr[fileNameArr.length - 1];
  }

  const handlelikeButton = (event) => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikesCount(likesCount + 1);
      Axios.post(
        `http://127.0.0.1:8000/api/posts/v1/post/${post.post_slug}/like/`,
        {},
        {
          headers: {
            Authorization: "Token 5fe688b143eb70d8004ba104126de33a4204a667",
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
      Axios.post(
        `http://127.0.0.1:8000/api/posts/v1/post/${post.post_slug}/unlike/`,
        {},
        {
          headers: {
            Authorization: "Token 5fe688b143eb70d8004ba104126de33a4204a667",
          },
        }
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const getDate = () => {
    const myDate = new Date(post?.modified_at);
    return myDate.toLocaleString();
  };
  return (
    <div className="post-wrapper">
      <div className="post-title-wrapper">
        <div className="title-outer-wrapper">
          <div className="image-wrapper">
            <img height={35} src={blankProfileImg} alt="Avatar" />
          </div>

          <div className="title-wrapper">
            <h6>
              <a href="/">{post.user_name}</a> shared a post.
            </h6>
            <p>{getDate()}</p>
          </div>
        </div>

        <div className="actions">
          <div className="action-menu">
            <div className="action-dot" />
            <div className="action-dot" />
            <div className="action-dot" />
          </div>
        </div>
      </div>

      <div className="tags-wrapper">
        <Tag text={post?.education.university_name} />
        <Tag text={post?.education.faculty_name} />
        <Tag text={post?.education.semester} />
      </div>

      <div className="post-caption-wrapper">
        <p>{post.caption}</p>
        {post?.file ? (
          <p>
            <a
              href={post.file}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              {fileName}
            </a>
          </p>
        ) : null}

        <div className="like-counter">
          <p>
            {likesCount} {likesCount === 1 ? "Like" : "Likes"}
          </p>
        </div>
      </div>

      <div className="post-footer-wrapper">
        <div
          className="like-comment-btn"
          style={isLiked ? { color: "#6600fc" } : null}
          onClick={handlelikeButton}
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
        </div>
        <div className="like-comment-btn">
          <InsertCommentRoundedIcon /> Comment
        </div>
        <div className="like-comment-btn">
          <Link to={`${path}/${post.post_slug}`}>Details</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profileData: state.profile,
  };
};

export default connect(mapStateToProps)(Post);
