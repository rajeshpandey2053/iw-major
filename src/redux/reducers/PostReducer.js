// import * as types from "../actions/ActionTypes";

import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "../actions/ActionTypes";

// export default function PostReducer(state = [], action) {
//   switch (action.type) {
//     case types.CREATE_POST:
//       return [...state, { ...action.post }];
//     default:
//       return state;
//   }
// }

const initialState = {
  loading: false,
  posts: [],
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
        posts: action.posts,
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
