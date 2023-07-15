import React from "react";
import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 text-slate-200 text-2xl flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-2xl py-2 px-4">
      <h1 className="grid place-content-center mb-2 md:mb-0 font-medium">
        <Link href="/">Wiki-Rocket</Link>
      </h1>
      <Search />
    </nav>
  );
}
