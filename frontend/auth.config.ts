import { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/login",
        signOut: "/login",
        error: "/login",
    },
    callbacks: {
        // async authorized({ request, auth }) {
        //     const { nextUrl } = request;
        //     const isLoggedIn = !!auth?.user;
        //     console.log(isLoggedIn + "is logged");

        //     const isAuthRoute = nextUrl.pathname.startsWith("/api/auth");
        //     const isPublicRoute = nextUrl.pathname === "/login";
        //     const isNextAsset = nextUrl.pathname.startsWith("/_next");
        //     const isStaticFile = nextUrl.pathname.match(/\.(.*)$/);

        //     if (isAuthRoute) return true;

        //     if (isNextAsset || isStaticFile) return true;

        //     if (isPublicRoute && isLoggedIn) {
        //         return false;
        //     }

        //     if (!isLoggedIn && !isPublicRoute) {
        //         return false;
        //     }

        //     // ✅ Caso normal
        //     return true;
        // },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            console.log(auth + "aqui");
            const isOnDashboard = nextUrl.pathname.startsWith("/products");
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL("/products", nextUrl));
            }
            return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;
