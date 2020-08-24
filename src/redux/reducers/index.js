import { combineReducers } from "redux";
import reducer from '../loginReducer/loginReducer';

const rootReducer = combineReducers({login:reducer});

export default rootReducer;
