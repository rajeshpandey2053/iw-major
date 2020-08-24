import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "./ActionTypes";
import Axios from "axios";
// import * as types from "./ActionTypes";

// export function createPost(post) {
//   return {
//     type: types.CREATE_POST,
//     post: post,
//   };
// }

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    posts: posts,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    error: error,
  };
};

export const createPostRequest = () => {
  // console.log("hello2");
  return {
    type: CREATE_POST_REQUEST,
  };
};

export const createPostSuccess = () => {
  console.log("Hello from success");
  return {
    type: CREATE_POST_SUCCESS,
  };
};

export const createPostFailure = (error) => {
  console.log("Hello from Failuare");
  // console.log(error);
  return {
    type: CREATE_POST_FAILURE,
    error: error,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest);
    Axios.get("http://127.0.0.1:8000/api/posts/v1/post/list/")
      .then((response) => {
        const posts = response.data.results;
        dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(error);
        dispatch(fetchPostFailure(errorMsg));
      });
  };
};

export const createPosts = (posts) => {
  // console.log({ posts });
  return (dispatch) => {
    // console.log({posts});
    dispatch(createPostRequest);
    Axios.post("http://127.0.0.1:8000/api/posts/v1/post/create/", {
      user: 1,
      post_slug: "post-slug",
      caption: posts.caption,
      file: posts.file,
    })
      .then((response) => {
        dispatch(createPostSuccess());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createPostFailure(errorMsg));
      });
  };
};
