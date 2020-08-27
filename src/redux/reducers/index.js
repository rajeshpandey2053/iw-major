import { combineReducers } from "redux";
import reducer from '../loginReducer/loginReducer';
import profileReducer from "./ProfileReducer";

const rootReducer = combineReducers({
    login:reducer,
    profile: profileReducer,
});

export default rootReducer;
