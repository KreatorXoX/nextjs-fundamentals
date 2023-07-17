import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "../config/limiter";

export async function GET(req: NextRequest) {
  const origin = req.headers.get("origin");
  const remaining = await rateLimiter.removeTokens(1);

  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too Many Requests",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain",
      },
    });
  }
  return NextResponse.json({ message: "Hello, World !" });
}
