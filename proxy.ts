import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // subdomain: admin.domain.com
  if (hostname.startsWith("admin.")) {
    // Rewrite everything on admin.domain.com → /admin/*
    return {
      destination: `/admin${request.nextUrl.pathname}`,
    };
  }

  // otherwise → keep going normally (no return needed)
}
