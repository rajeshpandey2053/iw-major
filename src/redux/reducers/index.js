import { combineReducers } from "redux";
import postReducer from "./PostReducer";
import profileReducer from "./ProfileReducer";
const rootReducer = combineReducers({
  post: postReducer,
  profile: profileReducer,
});

export default rootReducer;
