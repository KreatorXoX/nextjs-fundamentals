export default async function getUser(id: string): Promise<IUser | undefined> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    //throw new Error("Failed to fetch user");
    // commented out the error to follow the not found provided by nextjs
    return undefined;
  }
  return res.json();
}
