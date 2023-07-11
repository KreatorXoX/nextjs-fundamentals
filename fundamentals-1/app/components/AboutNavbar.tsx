import React from "react";
import Link from "next/link";

type Props = {};

const AboutNavbar = (props: Props) => {
  return (
    <nav className="absolute w-full top-0 left-0">
      <div className="relative w-full py-3 bg-red-800 flex justify-center items-center text-xl gap-5">
        <span className="absolute left-0 text-sm top-0">About Navbar</span>
        <Link href={"/"} className="hover:underline underline-offset-2">
          {" "}
          Back to Home Page
        </Link>
      </div>
    </nav>
  );
};

export default AboutNavbar;
