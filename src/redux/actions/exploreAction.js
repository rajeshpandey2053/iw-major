import axios from "../../utils/axios";
import {
  EXPLORE_FETCH_FAILURE,
  EXPLORE_FETCH_REQUEST,
  EXPLORE_FETCH_SUCCESS,
  APPEND_EXPLORE_POST_SUCCESS,
} from "./ActionTypes";

export const fetchExplorePostsRequest = () => {
  return {
    type: EXPLORE_FETCH_REQUEST,
  };
};

export const fetchExplorePostsSuccess = (posts, nextLink) => {
  return {
    type: EXPLORE_FETCH_SUCCESS,
    posts,
    nextLink,
  };
};

export const fetchExplorePostsFailure = errors => {
  return {
    type: EXPLORE_FETCH_FAILURE,
    errors,
  };
};

export const fetchAndAppendExplorePostSuccess = (posts, nextLink) => {
  return {
    type: APPEND_EXPLORE_POST_SUCCESS,
    posts,
    nextLink,
  };
};

// thunk actions for the requests
export const fetchPostsForExplore = (params = {}) => {
  return dispatch => {
    console.log("start");
    dispatch(fetchExplorePostsRequest());

    axios
      .get("/api/posts/v1/post/explore/", { params })
      .then(response => {
        console.log(response);
        const { results, next } = response.data;
        dispatch(fetchExplorePostsSuccess(results, next));
      })
      .catch(err => {
        console.log("fetch_fail");
        console.log(err);
        dispatch(fetchExplorePostsFailure(err));
      });
  };
};

export const appendExplorePosts = (nextLink, params) => {
  console.log("IamAppend");
  console.log({ nextLink, params });
  return dispatch => {
    dispatch(fetchExplorePostsRequest());
    axios
      .get(nextLink, { params })
      .then(response => {
        const { results, nextLink } = response.data;
        dispatch(fetchAndAppendExplorePostSuccess(results, nextLink));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchExplorePostsFailure(err));
      })
      .catch(err => console.log(err));
  };
};
