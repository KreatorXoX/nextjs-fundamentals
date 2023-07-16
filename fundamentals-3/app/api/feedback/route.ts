import { NextResponse } from "next/server";

type FeedBack = {
  name?: string;
  email?: string;
  message?: string;
};
export async function POST(req: Request) {
  // unlike express we need to await and .json the req object.
  const data: FeedBack = await req.json();
  console.log(data);

  const { name, email, message } = data;
  return NextResponse.json({ name, email, message });
}
