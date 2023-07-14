export default async function getUserPosts(id: string): Promise<IPost[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  // fetch is default to {cache:'force-cache'}
  // if you dont want to see stale data you can use {cache:'no-store'}
  // or incremental static regen => create the page and revalidate
  // {next:{revalidate:60}} 60 seconds to check to see if there is new data
  // last option usually the best one for the server side rendered components
  // for using the revalidate on page.tsx or layout.tsx
  // use it as => export const revalidate = 60

  //in order to turn ssr pages to ssg pages we can tell next.js what
  // are dynamic values are and make dynamic pages static as well

  if (!res.ok) {
    throw new Error("Failed to fetch user's posts");
  }
  return res.json();
}
