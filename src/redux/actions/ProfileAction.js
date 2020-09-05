import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_FACULTY_SUCCESS,
  FETCH_UNIVERSITY_SUCCESS,
  POST_UNLIKED_SUCCESS,
  POST_LIKED_SUCCESS,
} from "./ActionTypes";
import Axios from "../../utils/axios";
import a from "axios";

const token = localStorage.getItem("token");

Axios.defaults.headers.common["Authorization"] = `Token ${token}`;

const fetchProfileURL = "/api/accounts/v1/user/profile";
const updateProfileURL = "/api/accounts/v1/user/update";
const getfacultyURL = "/api/accounts/v1/faculty";
const getUniversityURL = "/api/accounts/v1/university";

export const fetchProfileRequest = () => {
  return {
    type: FETCH_PROFILE_REQUEST,
  };
};

export const fetchProfileSuccess = profiles => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    profiles: profiles,
  };
};

export const fetchProfileFailure = error => {
  return {
    type: FETCH_PROFILE_FAILURE,
    error: error,
  };
};

export const fetchFacultySuccess = faculty => {
  return {
    type: FETCH_FACULTY_SUCCESS,
    faculty: faculty,
  };
};

export const fetchUniversitySuccess = univ => {
  return {
    type: FETCH_UNIVERSITY_SUCCESS,
    univ: univ,
  };
};

export const postUnLikedSuccess = post_id => {
  return {
    type: POST_UNLIKED_SUCCESS,
    post_id: post_id,
  };
};

export const postLikedSuccess = post_id => {
  return {
    type: POST_LIKED_SUCCESS,
    post_id: post_id,
  };
};

export const fetchProfiles = () => {
  return dispatch => {
    dispatch(fetchProfileRequest());
    Axios.get(fetchProfileURL)
      .then(response => {
        const profiles = response.data;
        dispatch(fetchProfileSuccess(profiles));
      })
      .catch(error => {
        const errorMsg = error.message;
        console.log(error);
        dispatch(fetchProfileFailure(errorMsg));
      });
  };
};

export const updateProfiles = profile => {
  return dispatch => {
    Axios.patch(updateProfileURL, profile)
      .then(response => {
        console.log(response);
        fetchProfiles();
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const likedPosts = (post_slug, post_id, action) => {
  console.log(post_slug, post_id, action);
  return dispatch => {
    action === "like"
      ? Axios.post(`/api/posts/v1/post/${post_slug}/${action}/`)
          .then(response => {
            console.log(response);
            dispatch(postLikedSuccess(post_id));
          })
          .catch(error => {
            console.log(error.message);
          })
      : Axios.post(`/api/posts/v1/post/${post_slug}/${action}/`)
          .then(response => {
            console.log(response);
            dispatch(postUnLikedSuccess(post_id));
          })
          .catch(error => {
            console.log(error.message);
          });
  };
};

export const fetchEducation = () => {
  return dispatch => {
    Axios.get(getfacultyURL)
      .then(response => {
        const faculty = response.data;
        dispatch(fetchFacultySuccess(faculty));
      })
      .catch(error => {
        console.log(error);
      });
    Axios.get(getUniversityURL)
      .then(response => {
        const university = response.data;
        dispatch(fetchUniversitySuccess(university));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
