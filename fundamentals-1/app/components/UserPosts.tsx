import React from "react";
import Post from "./Post";
type Props = {
  promise: Promise<IPost[]>;
};
export default async function UserPosts({ promise }: Props) {
  const posts = await promise;

  const content = posts.map((post) => <Post key={post.id} post={post} />);
  return content;
}
