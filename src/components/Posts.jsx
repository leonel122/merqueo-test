import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { SELECTOR_POSTS } from "../redux/selectors/posts";
import { post } from "request";

export default function Posts() {
  const posts = useSelector(SELECTOR_POSTS);

  return (
    <>
      {posts.map((it, key) => (
        <Card post={it} index={key} key={key} />
      ))}
    </>
  );
}
