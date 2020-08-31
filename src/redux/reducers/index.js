import { combineReducers } from "redux";
import loginReducer from '../loginReducer/loginReducer';
import postReducer from "./PostReducer";
import profileReducer from "./ProfileReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  post: postReducer,
  profile: profileReducer,
});

export default rootReducer;
