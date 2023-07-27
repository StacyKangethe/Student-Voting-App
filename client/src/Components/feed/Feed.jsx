import React from 'react';
import './feed.css';
import Share from "../share/Share";
import { Posts } from "../../Dummydata.js";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper"></div>
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}

export default Feed