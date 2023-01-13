import React from "react";
import { useSelector } from "react-redux";
import { EmptyBlock } from "./EmptyBlock";
import { Post } from "./Post";

export const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  if (!posts.length) {
    return <EmptyBlock />;
  }

  return posts?.map((post) => <Post post={post} key={post.id} />);
};
