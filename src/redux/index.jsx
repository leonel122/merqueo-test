import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { posts } from "./reducers/posts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function store() {
  return createStore(
    combineReducers({
      posts: posts,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
}

export default store;
