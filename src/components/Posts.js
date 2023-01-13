import React from "react";
import { EmptyBlock } from "./EmptyBlock";
import { Post } from "./Post";


export const Posts = ({ posts }) => {
  if (!posts.length) {
    return <EmptyBlock />;
  }

  return posts?.map((post, index) => <Post post={post} key={index} />);
};
