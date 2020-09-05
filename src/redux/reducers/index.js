import { combineReducers } from "redux";
import loginReducer from "../loginReducer/loginReducer";
import postReducer from "./PostReducer";
import profileReducer from "./ProfileReducer";
import exploreReducer from "./exploreReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  post: postReducer,
  profile: profileReducer,
  explore: exploreReducer,
});

export default rootReducer;
