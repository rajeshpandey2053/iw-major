import {
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE,
  } from "../actions/ActionTypes";
  
  const initialState = {
    loading: false,
    profiles: {
      followers: null,
      following: null,
      user: {
        email: "",
        first_name: "",
        last_name: "",
        profile: null,
        username: "",
      },
    },
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PROFILE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PROFILE_SUCCESS:
        return {
          loading: false,
          profiles: action.profiles,
          errors: "",
        };
      case FETCH_PROFILE_FAILURE:
        return {
          loading: false,
          profiles: [],
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default reducer;