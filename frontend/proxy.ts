import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "./app/lib/session/session";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const token = await verifySession();

    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: "/products/:path*",
};
