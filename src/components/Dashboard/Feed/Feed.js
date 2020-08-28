import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import "./feed.scss";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";
import {fetchPosts} from "../../../redux/actions/PostAction";


const Feed = ({postData, fetchPosts}) => {
    const [readMore, setReadMore] = useState(false);
    // const [nextPageLink, setnextPageLink] = useState();
    return (
        <div className="feed-wrapper">
            <CreatePost/>
            {postData.posts &&
            postData.posts.map((post) => (
                <Post
                    key={post.post_slug}
                    post={post}
                />
            ))}
            {postData.nextPageLink ? (
                <button
                    className="read-more-link"
                    onClick={() => {
                        setReadMore(!readMore);
                        fetchPosts(postData?.nextPageLink);
                    }}
                >
                    <h2>Show More</h2>
                </button>
            ) : (
                <p>Thats all da feed you got</p>
            )}
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
        fetchPosts: (pageLink) => dispatch(fetchPosts(pageLink)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
