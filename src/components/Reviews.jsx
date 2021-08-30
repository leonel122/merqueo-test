import React from "react";
import Avatar from "./Avatar";
import moment from "moment";

function Reviews({ review }) {
  return (
    <div className="contentReviews">
      <Avatar src={review.avatar} alt={review.name} />
      <div className="contentInfoReview">
        <div>
          <p>{review.name}</p>
        </div>
        <div className="review">
          <p>{review.post}</p>
          <p>{moment(review.date).fromNow()}</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
