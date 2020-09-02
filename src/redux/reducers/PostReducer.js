import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_FAILURE,
  DELETE_POST_SUCCESS,
} from "../actions/ActionTypes";

const defaultnextPageLink = "/api/posts/v1/post/list/";

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
        ...state,
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
        posts: [action.newPost, ...state.posts],
        loading: false,
        errors: "",
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) =>
          post.post_slug === action.post_slug ? action.updatedPost : post
        ),
        loading: false,
        errors: "",
      };
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter(
          (post) => post.post_slug !== action.post_slug
        ),
        loading: false,
        errors: "",
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
