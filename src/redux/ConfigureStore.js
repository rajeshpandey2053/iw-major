import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import thunk from "redux-thunk";

export default function ConfigureStore(initialState) {
  // const composeEnhancers =
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for redux devtools
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
