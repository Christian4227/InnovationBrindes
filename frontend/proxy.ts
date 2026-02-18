import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const { pathname } = req.nextUrl;

    // 🔒 Se NÃO estiver logado e tentar acessar área protegida → vai pro login
    if (!isLoggedIn) {
        const loginUrl = new URL("/login", req.nextUrl.origin);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // ✅ Se estiver logado, deixa seguir normalmente
    return NextResponse.next();
});

export const config = {
    matcher: ["/products/:path*", "/products/:path*"], // rotas protegidas
};
