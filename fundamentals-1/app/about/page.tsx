import Link from "next/link";
import React from "react";

type Props = {};

export default function About({}: Props) {
  // throw new Error("yooo");
  // this error doesnt crash the entire app because we have error handling page
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Welcome</h2>
      <Link href={"/"} className="hover:underline underline-offset-2">
        {" "}
        Go to Home Page
      </Link>
    </div>
  );
}
