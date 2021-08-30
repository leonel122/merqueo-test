import React, { useState } from "react";
import Avatar from "./Avatar";
import AvartarGroup from "./AvatarGroup";
import FormNewPost from "./FormNewPost";
import Reviews from "./Reviews";
import Reactions from "./Reactions";
import { TYPE_REVIEW } from "../constans";
import moment from "moment";
import moment_es from "moment/locale/es";

moment.locale("es", moment_es);

export default function Card({ post, index }) {
  const [showFormComment, setShowFormComment] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showReactions, setShowReactions] = useState(false);

  const showReviewsAction = () => {
    setShowFormComment(false);
    setShowReviews(true);
  };

  return (
    <>
      <div className="card">
        <div className="contentHeader">
          <Avatar src={post.avatar} alt={post.name} />
          <div className="cardTitle">
            <p>{post.name}</p>
            <p>{moment(post.date).fromNow()}</p>
          </div>
        </div>
        <div className="contentBody">
          <div className="post">
            <p>{post.post}</p>
          </div>
          <div className="contentLikesComments">
            <div className="cententLikes">
              {!!post.likess?.length ? (
                <>
                  <AvartarGroup post={post} />
                  <div className="numLikes">{post.likess?.length} likes</div>
                </>
              ) : (
                <p>No tiene likes</p>
              )}
            </div>
            {post.reviews.length ? (
              <div
                onClick={() => {
                  setShowReviews(!showReviews);
                  setShowFormComment(false);
                }}
              >
                <div>{`${post.reviews.length} ${
                  post.reviews.length === 1 ? "comentario" : "comentarios"
                }`}</div>
              </div>
            ) : (
              <div>sin comentarios</div>
            )}
          </div>
          <div className="divider"></div>
          <div className="actions">
            <div>
              {/* {!!showReactions && ( */}
              <div className={`reactions ${showReactions && "showComponent"}`}>
                <Reactions
                  in={showReactions}
                  index={index}
                  setShowReactions={setShowReactions}
                />
              </div>
              {/* )} */}
              <div
                onClick={() => {
                  setShowReactions(!showReactions);
                }}
              >
                Reaccionar
              </div>
            </div>
            <div
              onClick={() => {
                setShowFormComment(!showFormComment);
                setShowReviews(false);
              }}
            >
              {showFormComment ? "X" : "Comentar"}
            </div>
          </div>
        </div>
      </div>
      {!!showFormComment && (
        <div className="contentFormNewComment">
          <FormNewPost
            onButton={true}
            type={TYPE_REVIEW}
            index={index}
            placeholder="Escribe tu comentario."
            showReviewsAction={showReviewsAction}
          />
        </div>
      )}
      {!!showReviews && (
        <div className="contentFormNewComment contentFormNewCommentList">
          {post.reviews.map((it, key) => (
            <>
              <Reviews review={it} key={key} />
            </>
          ))}
        </div>
      )}
    </>
  );
}
