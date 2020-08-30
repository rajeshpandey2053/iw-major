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
} from "./ActionTypes";
const BASE_URL = "http://127.0.0.1:8000/";
const createPostURL = `${BASE_URL}api/posts/v1/post/create/`;
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
    Axios.get(PageLink, {
      headers: {
        Authorization: "Token 5fe688b143eb70d8004ba104126de33a4204a667",
      },
    })
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
  const formData = new FormData();
  formData.append("user", 1);
  formData.append("file", posts.file);
  formData.append("post_slug", "post_slug");
  formData.append("caption", posts.caption);
  formData.append("education.semester", "1");
  formData.append("education.faculty", 1);
  formData.append("education.university", 1);

  return (dispatch) => {
    // console.log({posts});
    dispatch(createPostRequest);
    Axios({
      url: createPostURL,
      method: "POST",
      data: formData,
      headers: {
        Authorization: "Token 4eee293af83be3b61fb44d07282f89c2ec4d4bf1",
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response.data);
        const newPost = response.data;
        dispatch(createPostSuccess(newPost));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createPostFailure(errorMsg));
      });
  };
};

export const deletePost = (post_slug) => {
  return (dispatch) => {
    dispatch(deletePostRequest);
    Axios.delete(`${BASE_URL}api/posts/v1/post/${post_slug}/`, {
      headers: {
        Authorization: "Token 4eee293af83be3b61fb44d07282f89c2ec4d4bf1",
      },
    })
      .then((response) => {
        dispatch(deletePostSuccess(post_slug));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deletePostFailure(errorMsg));
      });
  };
};
