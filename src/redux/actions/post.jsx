import posts from "../reducers/posts";

export function PostsSet(data) {
  return async (dispatch) => {
    dispatch(posts.Creators.setPost(data));
  };
}

export function LikessSet(data) {
  return async (dispatch) => {
    dispatch(posts.Creators.setLikess(data));
  };
}

export function ReviewsSet(data) {
  return async (dispatch) => {
    dispatch(posts.Creators.setReviews(data));
  };
}
