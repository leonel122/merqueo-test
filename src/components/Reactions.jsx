import React from "react";
import { useDispatch } from "react-redux";
import {
  LikeIcon,
  HappyIcon,
  LoveIcon,
  CryICon,
  SadIcon,
  ScepticIcon,
} from "../components/icons/emoticos";
import { LikessSet } from "../redux/actions/post";
import { users } from "../constans";
import random from "random";

function Reactions({ index, setShowReactions }) {
  const dispatch = useDispatch();

  const createReview = (index) => {
    const data = {
      index,
      user: {
        avatar: users[random.int(0, 14)].avatar,
      },
    };

    dispatch(LikessSet(data));
    setShowReactions(false);
  };

  return (
    <div className="contentReactions" onClick={() => createReview(index)}>
      <div>
        <LikeIcon />
      </div>
      <div>
        <HappyIcon />
      </div>
      <div>
        <LoveIcon />
      </div>
      <div>
        <CryICon />
      </div>
      <div>
        <SadIcon />
      </div>
      <div>
        <ScepticIcon />
      </div>
    </div>
  );
}

export default Reactions;
