import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.sitename.com", "https://sitename.com"]
    : ["http://localhost:3000", "https://www.google.com"];

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  // check path to use this middleware
  if (request.nextUrl.pathname.startsWith("/api")) {
    console.log("we in middleware");
    console.log(request.method);
    console.log(request.url);
    console.log(origin);
  }

  return NextResponse.next();
}

// or we can define it like this to match our path
// export const config = {
//   matcher: "/api/:path*",
// };
