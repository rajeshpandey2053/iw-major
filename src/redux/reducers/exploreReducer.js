import {
  EXPLORE_FETCH_FAILURE,
  EXPLORE_FETCH_REQUEST,
  EXPLORE_FETCH_SUCCESS,
  APPEND_EXPLORE_POST_SUCCESS,
} from "../actions/ActionTypes";

const initialState = {
  loading: false,
  posts: [],
  nextLink: null,
  errors: null,
};

const exploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPLORE_FETCH_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case EXPLORE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        nextLink: action.nextLink,
      };
    case EXPLORE_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        errors: action.errors,
      };
    case APPEND_EXPLORE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: state.posts.concat(action.posts),
        nextLink: action.nextLink,
      };
    default:
      return state;
  }
};

export default exploreReducer;
