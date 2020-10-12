import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { SearchState } from "./initialState"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function configureStore(initialState: SearchState) {
  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
      compose);

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
