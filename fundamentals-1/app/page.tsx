import Link from "next/link";

export default function Home() {
  // throw new Error("yooo");
  // this error crashes the entire app because we have no error handling page
  return (
    <main className="flex flex-col items-center justify-center bg-red-400 h-full">
      <h2>Welcome</h2>
      <Link href={"/about"} className="hover:underline underline-offset-2">
        {" "}
        Go to About Page
      </Link>
    </main>
  );
}
