import React from "react";
import { FetchedPosts } from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import { Posts } from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="mt-3">Posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2 className="mt-3">Async Posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
