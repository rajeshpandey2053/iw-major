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

export const fetchPosts = (PageLink) => {
  return (dispatch) => {
    dispatch(fetchPostRequest);
    Axios.get(PageLink, {
      headers: {
        Authorization: "Token 4eee293af83be3b61fb44d07282f89c2ec4d4bf1",
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
