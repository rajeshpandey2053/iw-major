import React, {useState} from "react";
import './updatePost.scss';

const UpdatePost = (props) => {
    const [caption, setCaption] = useState(props?.post?.caption || '')

    const handleSubmit = event => {
        event.preventDefault();
        console.log({caption});
        props.updatePostToggle();
        setCaption('')
    }

    const handleChange = event => {
        setCaption(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit} className='post-update-form-wrapper'>
            <div className="update-form-title">
                <h5>Update post.</h5>
            </div>
            <div className="field-wrapper">
                <label htmlFor="caption" className='update-field-label'>Caption</label>
                <textarea
                    name="caption"
                    id="caption"
                    cols={30}
                    rows={2}
                    onChange={handleChange}
                    value={caption}
                />
            </div>
            <div className="action-update-btns">
                <input type="submit" value="Update" className='update-btn'/>
                <button type={`button`} id='cancel'
                        onClick={() => props.updatePostToggle()}>
                    Cancel
                </button>
            </div>

        </form>
    )
}

export default UpdatePost;