import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
} from "./ActionTypes";
import Axios from "axios";

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
    // let token = "93ae98ced6493d4d9d27e049538f60715a71478b";
    Axios.get("http://127.0.0.1:8000/api/accounts/v1/user/profile", {
      headers: {
        Authorization: "Token 93ae98ced6493d4d9d27e049538f60715a71478b",
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
