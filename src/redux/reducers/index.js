import { combineReducers } from "redux";
import postReducer from "./PostReducer";

const rootReducer = combineReducers({
  post: postReducer,
});

export default rootReducer;
