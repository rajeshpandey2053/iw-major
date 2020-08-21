import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { reduxImmutableStateInvariant } from "redux-immutable-state-invariant"; // warn when user tries to mutate state and only use during development
import thunk from "redux-thunk";

export default function ConfigureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose; //add support for redux devtools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
