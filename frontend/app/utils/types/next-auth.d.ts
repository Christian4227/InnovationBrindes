import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
    interface User {
        remember?: boolean;
        accessToken?: string;
    }

    interface Session {
        remember?: boolean;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        remember?: boolean;
    }
}
