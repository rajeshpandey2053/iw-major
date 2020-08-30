import React, {useState} from "react";
import './updatePost.scss';

const UpdatePost = (props) => {
    const [newPost, setNewPost] = useState({
        caption: props?.post?.caption || '',
        university: props?.post?.education?.university || '',
        semester: props?.post?.education?.semester || '',
        faculty: props?.post?.education?.faculty || '',
    })

    const handleSubmit = event => {
        event.preventDefault();
        console.log({newPost});
        props.updatePostToggle();
        setNewPost()
    }

    const handleChange = event => {
        const {name, value} = event.target
        setNewPost({
            ...newPost,
            [name]: value
        })
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
                    value={newPost.caption}
                />
            </div>

            <div className="update-education-input-fields">
                <div>
                    <select
                        title="University"
                        value={newPost.university}
                        name="university"
                        onChange={handleChange}
                    >
                        <option value={1}>Tribhuwan University</option>
                        <option value={2}>Purbanchal University</option>
                        <option value={3}>Pokhara University</option>
                    </select>
                </div>
                <div>
                    <select
                        title="Faculty"
                        value={newPost.faculty}
                        name="faculty"
                        onChange={handleChange}
                    >
                        <option value={1}>Bachelor in engineering</option>
                        <option value={2}>Chartered Accountancy</option>
                        <option value={3}>Bachelor in Business Administration</option>
                    </select>
                </div>
                <div>
                    <select
                        title="Semester"
                        value={newPost.semester}
                        name="semester"
                        onChange={handleChange}
                    >
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                        <option value="VI">VI</option>
                        <option value="VII">VII</option>
                        <option value="VIII">VIII</option>
                    </select>
                </div>
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