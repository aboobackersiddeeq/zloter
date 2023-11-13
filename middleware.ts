
//protected router
import { isAuthenticated } from "./utils/Auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const protectedRoutes = ["/admin"];
console.log(isAuthenticated)

export default function middleware(req: NextRequest) {
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}