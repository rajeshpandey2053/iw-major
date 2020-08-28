import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "../actions/ActionTypes";

const defaultnextPageLink = "http://127.0.0.1:8000/api/posts/v1/post/list/";

const initialState = {
  loading: false,
  posts: [],
  nextPageLink: defaultnextPageLink,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        loading: false,
        posts: state.posts.concat(action.posts),
        nextPageLink: action.nextPageLink,
        errors: "",
      };
    case FETCH_POST_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.error,
      };
    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: "",
      };
    case CREATE_POST_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
