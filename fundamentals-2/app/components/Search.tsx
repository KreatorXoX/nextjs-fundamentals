"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-lg text-gray-800"
        placeholder="Search"
      />
      <button className="px-3 text-xl rounded-lg bg-slate-300 font-semibold ml-2">
        🚀
      </button>
    </form>
  );
}
