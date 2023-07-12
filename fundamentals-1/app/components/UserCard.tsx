import Link from "next/link";
import React from "react";

type Props = {
  user: IUser;
};

const UserCard = ({ user }: Props) => {
  return (
    <li>
      <Link
        href={`/users/${user.id}`}
        className="flex flex-col bg-red-300 rounded-lg p-4 space-y-4 text-xs md:text-base"
      >
        <p>{user.name}</p>
        <p>{user.company.name}</p>
        <p className=" truncate">{user.email}</p>
        <p>{user.website}</p>
      </Link>
    </li>
  );
};

export default UserCard;
