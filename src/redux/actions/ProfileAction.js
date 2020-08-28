import {
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE,
  } from "./ActionTypes";
  import axios from "axios";

  const main_url = "http://127.0.0.1:8000/api/accounts/v1/user/profile"
  
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
  
  export const fetchProfiles = (token) => {
    return (dispatch) => {
      dispatch(fetchProfileRequest);
      axios.get(main_url, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then((response) => {
          const profiles = response.data;
          dispatch(fetchProfileSuccess(profiles));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchProfileFailure(errorMsg));
        });
    };
  };