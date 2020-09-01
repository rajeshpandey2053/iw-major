import Axios from "axios";
import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_FAILURE,
  DELETE_POST_SUCCESS,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
} from "./ActionTypes";

// const BASE_URL = "http://127.0.0.1:8000/";
const createPostURL = "/api/posts/v1/post/create/";
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

export const createPostSuccess = (newPost) => {
  console.log("Hello from success");
  return {
    type: CREATE_POST_SUCCESS,
    newPost: newPost,
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

export const updatePostRequest = () => {
  // console.log("hello2");
  return {
    type: UPDATE_POST_REQUEST,
  };
};

export const updatePostSuccess = (updatedPost) => {
  console.log("Hello from success");
  return {
    type: UPDATE_POST_SUCCESS,
    updatedPost: updatedPost,
  };
};

export const updatePostFailure = (error) => {
  return {
    type: UPDATE_POST_FAILURE,
    error: error,
  };
};

export const deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST,
  };
};
export const deletePostSuccess = (post_slug) => {
  return {
    type: DELETE_POST_SUCCESS,
    post_slug: post_slug,
  };
};

export const deletePostFailure = (error) => {
  return {
    type: DELETE_POST_FAILURE,
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

export const createPosts = (post, post_slug = "") => {
  const formData = new FormData();
  formData.append("user", null);
  formData.append("file", post.file);
  formData.append("post_slug", "post_slug");
  formData.append("caption", post.caption);
  formData.append("education.semester", post.education.semester);
  formData.append("education.faculty", post.education.faculty);
  formData.append("edcation.college", 1);
  formData.append("education.university", post.education.university);

  return (dispatch) => {
    // console.log({posts});
    if (post_slug === "") {
      dispatch(createPostRequest);
      Axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
      Axios.post(createPostURL, formData)
        .then((response) => {
          console.log(response.data);
          const newPost = response.data;
          dispatch(createPostSuccess(newPost));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(createPostFailure(errorMsg));
        });
    } else {
      dispatch(updatePostRequest);
      Axios.defaults.headers.put["Content-Type"] = "multipart/form-data";
      Axios(`/api/posts/v1/post/${post_slug}/update/`, formData)
        .then((response) => {
          console.log(response.data);
          const updatedPost = response.data;
          dispatch(updatePostSuccess(updatedPost));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(updatePostFailure(errorMsg));
        });
    }
  };
};

export const deletePost = (post_slug) => {
  return (dispatch) => {
    dispatch(deletePostRequest);
    Axios.delete(`api/posts/v1/post/${post_slug}/`)
      .then((response) => {
        dispatch(deletePostSuccess(post_slug));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deletePostFailure(errorMsg));
      });
  };
};
