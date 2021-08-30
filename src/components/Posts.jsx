import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { SELECTOR_POSTS } from "../redux/selectors/posts";

export default function Posts() {
  let posts = useSelector(SELECTOR_POSTS);

  return (
    <>
      {posts.map((it, key) => (
        <Card post={it} index={key} key={key} />
      ))}
    </>
  );
}
