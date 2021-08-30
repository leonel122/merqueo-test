import React, { useState } from "react";
import InputMain from "./InputMain";
import moment from "moment";
import ButtonMain from "./ButtomMain";
import { PostsSet, ReviewsSet } from "../redux/actions/post";
import { useDispatch } from "react-redux";
import { users, TYPE_POST, TYPE_REVIEW } from "../constans";
import random from "random";

export default function FormNewPost({
  onButton,
  type,
  index,
  placeholder,
  showReviewsAction,
}) {
  const [postText, setPostText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPostText(e.target.value);
    setError(false);
  };

  const crearInput = () => {
    setPostText("");
  };

  const handleSubmit = () => {
    if (postText === "" || postText.length > 255) {
      setError(true);
      return;
    }

    if (type === TYPE_POST) {
      const data = {
        post: postText,
        name: users[random.int(0, 14)].name,
        avatar: users[random.int(0, 14)].avatar,
        date: moment().format(),
        likes: 0,
        likess: [],
        reviews: [],
      };
      dispatch(PostsSet(data));
      crearInput();
    }
    if (type === TYPE_REVIEW) {
      const data = {
        review: {
          name: users[random.int(0, 14)].name,
          avatar: users[random.int(0, 14)].avatar,
          post: postText,
          date: moment().format("YYYY-MM-DD HH:mm:ss"),
        },
        index,
      };
      dispatch(ReviewsSet(data));
      crearInput();
      showReviewsAction();
    }
  };

  return (
    <div className="contentFormPost">
      <InputMain
        onChange={handleChange}
        value={postText}
        placeholder={placeholder}
        onClick={() => setShowButton(true)}
      />
      {error && <div>Debes escribir un post max(255 caracteres)</div>}
      {(showButton || onButton) && <ButtonMain onClick={handleSubmit} />}
    </div>
  );
}
