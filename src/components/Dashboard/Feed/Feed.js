import React from "react";
import './feed.scss';
import Post from "./Post/Post";

const Feed = () => {
    return (
        <div className='feed-wrapper'>
            <h1>This is the feed</h1>
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