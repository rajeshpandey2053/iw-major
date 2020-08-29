import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
} from "./ActionTypes";
import Axios from "axios";

const fetchProfileURL = "http://127.0.0.1:8000/api/accounts/v1/user/profile";

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

export const fetchProfiles = () => {
  return (dispatch) => {
    dispatch(fetchProfileRequest);
    Axios.get(fetchProfileURL, {
      headers: {
        Authorization: "Token 4eee293af83be3b61fb44d07282f89c2ec4d4bf1",
      },
    })
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
