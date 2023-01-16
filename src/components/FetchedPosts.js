import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/actions";
import { Post } from "./Post";

export const FetchedPosts = () => {
  const dispatch = useDispatch();
  const fetchPosts = useSelector((state) => state.posts.fetchedPosts);

  if (!fetchPosts?.length) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch(fetchPost())}>
        Download posts
      </button>
    );
  }

  return fetchPosts?.map((post) => <Post post={post} key={post.id} />);
};
