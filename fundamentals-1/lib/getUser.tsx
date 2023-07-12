export default async function getUser(id: string): Promise<IUser> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
}
