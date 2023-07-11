import type { Metadata } from "next";
import AboutNavbar from "../components/AboutNavbar";

export const metadata: Metadata = {
  title: "About",
  description: "Generated by create next app",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <AboutNavbar />
      <main className="h-full bg-orange-400 flex justify-center items-center">
        {children}
      </main>
    </div>
  );
}