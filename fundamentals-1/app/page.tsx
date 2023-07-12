import Link from "next/link";

export default function Home() {
  // throw new Error("yooo");
  // this error crashes the entire app because we have no error handling page
  return (
    <main className="flex flex-col items-center justify-center bg-red-400 h-full space-y-10">
      <h2>Welcome</h2>
      <ul className="list-disc">
        <li>
          <Link href={"/about"} className="hover:underline underline-offset-2">
            {" "}
            Go to About Page
          </Link>
        </li>
        <li>
          <Link href={"/users"} className="hover:underline underline-offset-2">
            {" "}
            Users
          </Link>
        </li>
      </ul>
    </main>
  );
}
