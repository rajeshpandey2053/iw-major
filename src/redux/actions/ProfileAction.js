import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
} from "./ActionTypes";
import Axios from "../../utils/axios";

const fetchProfileURL = "/api/accounts/v1/user/profile";

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
