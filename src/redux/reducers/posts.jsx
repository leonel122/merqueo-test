import { createActions, createReducer } from "reduxsauce";
import produce from "immer";

const INITIAL_STATE = { posts: [] };

const { Types, Creators } = createActions({
  setPost: ["posts"],
  setLikess: ["data"],
  setReviews: ["review"],
});

const setPost = (state, { posts }) => {
  return produce(state, (draftState) => {
    draftState.posts.push(posts);
  });
};

const setLikess = (state, { data }) => {
  return produce(state, (draftState) => {
    draftState.posts[data.index].likess.push(data.user);
  });
};

const setReviews = (state, { review }) => {
  return produce(state, draftState => {
    draftState.posts[review.index].reviews.push(review.review);
  });
};

// noinspection JSCheckFunctionSignatures
export const posts = createReducer(INITIAL_STATE, {
  [Types.SET_POST]: setPost,
  [Types.SET_LIKESS]: setLikess,
  [Types.SET_REVIEWS]: setReviews,
});

export default {
  Types,
  Creators,
};
