import React, {useState} from "react";
import './updateComment.scss';

const UpdateComment = props => {
    const [newComment, setNewComment] = useState('')
    const handleChange = event => {
        setNewComment(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(newComment)
        setNewComment('')
    }
    return (
        <form className='update-comment-wrapper' onSubmit={handleSubmit}>
            <div className='update-comment-field-wrapper'>
                <input type="text" value={newComment} onChange={handleChange}/>
                <input type="submit" value='Update'/>
            </div>
        </form>
    )
}

export default UpdateComment;