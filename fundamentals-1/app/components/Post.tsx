"use client";
import { useState } from "react";

type Props = {
  post: IPost;
};

const Post = ({ post }: Props) => {
  const [like, setLike] = useState(false);
  return (
    <article className="relative border bg-blue-200 border-blue-500 rounded-sm px-4 py-5 w-[15rem]">
      {like && <span className="absolute top-0 right-0 text-red-500">G</span>}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button
        className="text-red-500 absolute bottom-0 left-0"
        onClick={() => setLike((prev) => !prev)}
      >
        {like ? "Unlike" : "Like"}
      </button>
    </article>
  );
};

export default Post;
