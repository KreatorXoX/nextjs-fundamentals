import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  //   const name = searchParams.get("name");
  //   const instrument = searchParams.get("instrument");
  // or
  // this way we don't need to specify what parameters were entered
  // anything given as parameter will be echoed

  const obj = Object.fromEntries(searchParams.entries());

  return NextResponse.json(obj);
}
