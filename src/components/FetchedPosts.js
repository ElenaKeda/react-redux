import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/actions";
import { Post } from "./Post";
import { Spinner } from "./Spinner";

export const FetchedPosts = () => {
  const dispatch = useDispatch();
  const fetchPosts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Spinner />;
  }

  if (!fetchPosts?.length) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch(fetchPost())}>
        Download posts
      </button>
    );
  }

  return fetchPosts?.map((post) => <Post post={post} key={post.id} />);
};
