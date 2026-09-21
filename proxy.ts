import { NextResponse, type NextRequest } from "next/server";
import { GATE_COOKIE, gatePassword, gateToken, sameToken } from "@/lib/gate";

/**
 * Next.js 16 proxy (formerly middleware). Everything the browser reaches is
 * behind the shared password except the gate itself and the agent's own HTTP
 * surface under `/eve`, which carries its own authorization policy.
 */
export default async function proxy(request: NextRequest) {
  const password = gatePassword();
  if (!password) return NextResponse.next();

  const { pathname, search } = request.nextUrl;
  if (pathname === "/gate" || pathname === "/api/gate" || pathname.startsWith("/eve/")) {
    return NextResponse.next();
  }

  const expected = await gateToken(password);
  if (sameToken(request.cookies.get(GATE_COOKIE)?.value, expected)) {
    return NextResponse.next();
  }

  const gate = request.nextUrl.clone();
  gate.pathname = "/gate";
  gate.search = "";
  gate.searchParams.set("next", `${pathname}${search}`);
  return NextResponse.redirect(gate);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
