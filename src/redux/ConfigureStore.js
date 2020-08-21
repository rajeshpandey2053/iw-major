import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { reduxImmutableStateInvariant } from "redux-immutable-state-invariant"; // warn when user tries to mutate state

export default function ConfigureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose; //add support for redux devtools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
