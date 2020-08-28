import Axios from "axios";
import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "./ActionTypes";

const createPostURL = "http://127.0.0.1:8000/api/posts/v1/post/create/";

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

export const fetchPostSuccess = (posts, pageLink) => {
  return {
    type: FETCH_POST_SUCCESS,
    posts: posts,
    nextPageLink: pageLink,
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

export const fetchPosts = (PageLink) => {
  return (dispatch) => {
    dispatch(fetchPostRequest);
    Axios.get(PageLink)
      .then((response) => {
        const posts = response.data.results;
        const nextPageLink = response.data.next;
        dispatch(fetchPostSuccess(posts, nextPageLink));
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
    Axios.post(createPostURL, {
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
