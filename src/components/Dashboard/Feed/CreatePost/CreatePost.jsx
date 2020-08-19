import React from "react";
import './createPost.scss';
import blankAvatarImage from '../../../../images/blank-profile-picture-973460_1280.webp';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import AttachmentRoundedIcon from '@material-ui/icons/AttachmentRounded';

const CreatePost = () => {
    return (
        <div className='create-post-wrapper'>
            <div className='create-post-form'>
                <div className='create-post-avatar'>
                    <img src={blankAvatarImage} height={100} alt="Avatar"/>
                </div>
                <div className='input-section'>
                    <textarea name="caption" id="caption" cols={30} rows={2}>
                        Want to share something?
                    </textarea>
                </div>
            </div>

            <div className="create-post-action-bar">
                <div>
                    <ImageRoundedIcon />
                    <AttachmentRoundedIcon />
                </div>
                <div>
                    <button type='button' className='post-button'>Post</button>
                </div>

            </div>
        </div>
    )
}

export default CreatePost;
