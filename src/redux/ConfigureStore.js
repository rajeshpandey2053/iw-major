import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
// warn when user tries to mutate state and only use during development
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

export default function ConfigureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//add support for redux devtools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
