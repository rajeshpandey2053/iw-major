import React from "react";
import './feed.scss';
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

const Feed = () => {
    return (
        <div className='feed-wrapper'>
            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed;