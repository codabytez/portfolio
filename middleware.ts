import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // subdomain: admin.domain.com
  if (hostname.startsWith("admin.")) {
    // Rewrite everything on admin.domain.com → /admin/*
    return NextResponse.rewrite(
      new URL(`/admin${request.nextUrl.pathname}`, request.url)
    );
  }

  // otherwise → keep going normally
  return NextResponse.next();
}
