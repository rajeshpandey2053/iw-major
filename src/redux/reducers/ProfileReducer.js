import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_FACULTY_SUCCESS,
  FETCH_UNIVERSITY_SUCCESS,
  POST_UNLIKED_SUCCESS,
  POST_LIKED_SUCCESS,
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
  likedposts: [],
  faculty: [],
  university: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  console.log({ state });
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profiles: action.profiles,
        likedposts: action.profiles.user.profile.post,
        errors: "",
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        profiles: [],
        error: action.error,
      };
    case POST_UNLIKED_SUCCESS:
      return {
        ...state,
        likedposts: state.likedposts.filter((post) => post !== action.post_id),
        error: "",
      };
    case POST_LIKED_SUCCESS:
      return {
        ...state,
        likedposts: state.likedposts.concat(action.post_id),
        error: "",
      };
    case FETCH_FACULTY_SUCCESS:
      return {
        ...state,
        faculty: action.faculty,
        errors: "",
      };
    case FETCH_UNIVERSITY_SUCCESS:
      return {
        ...state,
        university: action.univ,
        errors: "",
      };
    default:
      return state;
  }
};

export default reducer;
