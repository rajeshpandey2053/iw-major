import React, {useState} from "react";
import "./post.scss";
import {Link, useRouteMatch} from 'react-router-dom';

import blankProfileImg from "../../../../images/blank-profile-picture-973460_1280.webp";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import InsertCommentRoundedIcon from "@material-ui/icons/InsertCommentRounded";

const Post = (props) => {
    const {path} = useRouteMatch();
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    return (
        <div className="post-wrapper">
            <div className="post-title-wrapper">
                <div className="title-outer-wrapper">
                    <div className="image-wrapper">
                        <img height={35} src={blankProfileImg} alt="Avatar"/>
                    </div>

                    <div className="title-wrapper">
                        <h6>
                            <a href="/">{props.username}</a> shared a post.
                        </h6>
                        <p>12:00, Aug 13</p>
                    </div>
                </div>

                <div className="actions">
                    <div className="action-menu">
                        <div className="action-dot"/>
                        <div className="action-dot"/>
                        <div className="action-dot"/>
                    </div>
                </div>
            </div>

            <div className="post-caption-wrapper">
                <p>{props.caption}</p>
                <div className="like-counter">
                    <p>
                        {likesCount} {likesCount === 1 ? "Like" : "Likes"}
                    </p>
                </div>
            </div>

            <div className="post-footer-wrapper">
                <div
                    className='like-comment-btn'
                    style={isLiked ? {color: '#6600fc'} : null}
                    onClick={() => {
                        setIsLiked(!isLiked);
                        isLiked ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1);
                    }}>
                    {!isLiked
                        ? (<>
                            <FavoriteBorderSharpIcon/> Like
                        </>)
                        : (<><FavoriteSharpIcon/> Unlike</>)
                    }
                </div>
                <div className='like-comment-btn'>
                    <InsertCommentRoundedIcon/> Comment
                </div>
                <div className='like-comment-btn'>
                    <Link to={`${path}/post`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Post;
