import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
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

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest);
    Axios.get("http://127.0.0.1:8000/api/posts/v1/post/list/")
      .then((response) => {
        const posts = response.data.results;
        console.log(posts);
        dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostFailure(errorMsg));
      });
  };
};
