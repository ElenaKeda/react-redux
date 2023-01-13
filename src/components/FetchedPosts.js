import React from "react";
import { Post } from "./Post";

export const FetchedPosts = ({ posts }) => {
  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => console.log("Download posts")}
      >
        Download posts
      </button>
    );
  }

  return posts?.map((post, index) => <Post post={post} key={index} />);
};
