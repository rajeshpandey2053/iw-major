import React, {useState} from "react";
import './updatePost.scss';

const UpdatePost = (props) => {
    const [caption, setCaption] = useState('')
    const handleSubmit = event  => {
        event.preventDefault();
        console.log({caption});
        setCaption('')
    }
    const handleChange = event => {
        setCaption(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit} className='post-update-form-wrapper'>
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
            <input type="submit" value="Update" className='update-btn' />
            <button>Cancel</button>
        </form>
    )
}

export default UpdatePost;