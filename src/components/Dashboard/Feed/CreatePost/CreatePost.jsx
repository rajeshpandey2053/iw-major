import React, {useState} from "react";
import "./createPost.scss";
import blankAvatarImage from "../../../../images/blank-profile-picture-973460_1280.webp";
import AttachmentRoundedIcon from "@material-ui/icons/AttachmentRounded";
import {createPosts} from "../../../../redux/actions/PostAction";
import {connect} from "react-redux";

const CreatePost = (props) => {
    const [caption, setCaption] = useState("");
    const [education, setEducation] = useState({
        university: 'TU',
        faculty: 'BE',
        semester: 1,
    })
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        event.preventDefault();
        setFile(event.target.files[0]);
    };

    const handleInputChange = (event) => {
        setCaption(event.target.value);
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setEducation({
            ...education,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        console.log({education})
        event.preventDefault();
        props.createPosts({caption, file});
        setEducation({
            university: 'TU',
            faculty: 'BE',
            semester: 1,
        })
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="create-post-wrapper">
                <div className="create-post-form">
                    <div className="create-post-avatar">
                        <img src={blankAvatarImage} height={100} alt="Avatar"/>
                    </div>
                    <div className="input-section">
            <textarea
                name="caption"
                id="caption"
                cols={30}
                rows={2}
                placeholder="Want to share something?"
                onChange={handleInputChange}
                value={caption}
            />
                    </div>
                </div>
                <div className='education-input-fields'>
                    <div>
                        <select title='University' value={education.university} name='university' onChange={handleChange}>
                            <option value="TU">Tribhuwan University</option>
                            <option value="PU">Purbanchal University</option>
                            <option value="PoU">Pokhara University</option>
                        </select>

                    </div>
                    <div>
                        <select title='Faculty' value={education.faculty} name='faculty' onChange={handleChange}>
                            <option value="BE">Bachelor in engineering</option>
                            <option value="CA">Chartered Accountancy</option>
                            <option value="BBA">Bachelor in Business Administration</option>
                        </select>

                    </div>
                    <div>
                        <select title='Semester' value={education.semester} name='semester' onChange={handleChange}>
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                            <option value="4">IV</option>
                            <option value="5">V</option>
                            <option value="6">VI</option>
                            <option value="7">VII</option>
                            <option value="8">VIII</option>
                        </select>

                    </div>
                </div>

                <div className="create-post-action-bar">
                    <div>
                        <div className="input-element">
                            <label htmlFor="image" title='Attach File'>
                                <AttachmentRoundedIcon/>
                            </label>
                            <input
                                type="file"
                                alt="hello"
                                id="image"
                                name="image"
                                style={{display: "none"}}
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="post-button">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        createPosts: (posts) => dispatch(createPosts(posts)),
    };
};

export default connect(null, mapDispatchToProps)(CreatePost);
