export default async function getUserPosts(id: string): Promise<IPost[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user's posts");
  }
  return res.json();
}
