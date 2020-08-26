import React, {useState} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory, Link} from 'react-router-dom';

import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import InsertCommentRoundedIcon from "@material-ui/icons/InsertCommentRounded";
import SendSharpIcon from '@material-ui/icons/SendSharp';

import './postDetail.scss';
import blankProfileImage from '../../../images/blank-profile-picture-973460_1280.webp';
import Comment from "./Comment/Comment";
import UpdatePost from "./UpdatePost/UpdatePost";

const PostDetail = (props) => {
    const [likesCount, setLikesCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [commentText, setCommentText] = useState('');
    const history = useHistory();

    const handleChange = event => {
        console.log(event.target.value);
        setCommentText(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(commentText);
    }

    return (
        <React.Fragment>
            <div className='post-detail'>
                <div className="top-bar">
                    <div className="top-bar__title">
                        <button
                            className="top-bar__title__back-btn"
                            onClick={() => history.goBack()}
                        >
                            <ArrowBackIcon/>
                        </button>
                    </div>
                </div>
                <div className="detail-wrapper">
                    <div className="detail-title">
                        <div className="detail-avatar">
                            <img src={blankProfileImage} alt="Avatar" height={60}/>
                        </div>
                        <div className="detail-title-info">
                            <p className="info-description">
                                <Link to='/dashboard'>Some Name</Link> shared a post.
                            </p>
                            <p className='info-timestamp'>Aug 23, 13: 46</p>
                        </div>
                    </div>

                    <div className="detail-info-wrapper">
                        <div className="info-text">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only
                                five
                                centuries, but also the leap into electronic typesetting, remaining essentially
                                unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                Ipsum
                                passages, and more recently with desktop publishing software like Aldus PageMaker
                                including
                                versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>

                    <div className="details-action-bar">
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
                            <label htmlFor='new-comment'>
                                <InsertCommentRoundedIcon/> Comment
                            </label>

                        </div>
                    </div>
                </div>
            </div>

            <div className="update-post-section">
                <UpdatePost />
            </div>

            <div className="comment-section">
                <div className="comment-count">
                    <p>3 comments</p>
                </div>
                <div className="comment">
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
            </div>

            <div className="create-comment-section">
                <form onSubmit={handleSubmit}>
                    <div className="create-comment">
                        <div className="comment-input-wrapper">
                            <input type="text" onChange={handleChange}
                                   value={commentText} id='new-comment'
                                   placeholder='Like the post? Tell here...'
                            />
                        </div>
                        <button type="submit"><SendSharpIcon /></button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}
export default PostDetail;