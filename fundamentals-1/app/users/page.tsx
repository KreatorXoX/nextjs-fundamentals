import { Metadata } from "next";
import React from "react";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import UserCard from "../components/UserCard";
export const metadata: Metadata = {
  title: "Users",
};
type Props = {};

export default async function Users({}: Props) {
  const users = await getAllUsers();

  const content = (
    <section className="bg-orange-300 h-screen px-5 flex flex-col justify-center items-center space-y-5">
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </section>
  );
  return content;
}
