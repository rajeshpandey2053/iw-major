import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  POST_UNLIKED_SUCCESS,
  POST_LIKED_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UDPATE_PROFILE_FAILURE,
} from "./ActionTypes";
import Axios from "../../utils/axios";

const fetchProfileURL = "/api/accounts/v1/user/profile";
const updateProfileURL = "/api/accounts/v1/user/update";

export const fetchProfileRequest = () => {
  return {
    type: FETCH_PROFILE_REQUEST,
  };
};

export const fetchProfileSuccess = (profiles) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    profiles: profiles,
  };
};

export const fetchProfileFailure = (error) => {
  return {
    type: FETCH_PROFILE_FAILURE,
    error: error,
  };
};

export const updateProfileRequest = () => {
  return {
    type: UPDATE_PROFILE_REQUEST,
  };
};

export const updateProfileSuccess = (profiles) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    profiles: profiles,
  };
};

export const udpateProfileFailure = (error) => {
  return {
    type: UDPATE_PROFILE_FAILURE,
    error: error,
  };
};

export const postUnLikedSuccess = (post_id) => {
  return {
    type: POST_UNLIKED_SUCCESS,
    post_id: post_id,
  };
};

export const postLikedSuccess = (post_id) => {
  return {
    type: POST_LIKED_SUCCESS,
    post_id: post_id,
  };
};

export const fetchProfiles = () => {
  return (dispatch) => {
    dispatch(fetchProfileRequest());
    Axios.get(fetchProfileURL)
      .then((response) => {
        const profiles = response.data;
        dispatch(fetchProfileSuccess(profiles));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(error);
        dispatch(fetchProfileFailure(errorMsg));
      });
  };
};

export const updateProfiles = (profile) => {
  return (dispatch) => {
    Axios.patch(updateProfileURL, profile)
      .then((response) => {
        console.log(response);
        fetchProfiles();
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const likedPosts = (post_slug, post_id, action) => {
  console.log(post_slug, post_id, action);
  return (dispatch) => {
    action === "like"
      ? Axios.post(`/api/posts/v1/post/${post_slug}/${action}/`)
          .then((response) => {
            console.log(response);
            dispatch(postLikedSuccess(post_id));
          })
          .catch((error) => {
            console.log(error.message);
          })
      : Axios.post(`/api/posts/v1/post/${post_slug}/${action}/`)
          .then((response) => {
            console.log(response);
            dispatch(postUnLikedSuccess(post_id));
          })
          .catch((error) => {
            console.log(error.message);
          });
  };
};
