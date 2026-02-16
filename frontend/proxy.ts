import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export default async function proxy(request: NextRequest) {
    const token = (await cookies()).get("ib_user")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (!request.nextUrl.pathname.startsWith("/products")) {
        return NextResponse.redirect(new URL("/products/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/products/:path*",
};
