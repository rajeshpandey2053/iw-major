import React from "react";
import {useEffect} from "react";
import {connect} from "react-redux";
import "./feed.scss";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";
import {fetchPosts} from "../../../redux/actions/PostAction";

const Feed = ({postData, fetchPosts}) => {
    // console.log("hello1");
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div className="feed-wrapper">
            {console.log({postData})}
            <CreatePost/>
            {postData.posts.map((post) => (
                <Post
                    key={post.post_slug}
                    post={post}
                />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        postData: state.post,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
