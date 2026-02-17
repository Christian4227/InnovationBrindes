import NextAuth, { User } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { LoginResponse } from "./app/utils/login/loginInterface";
import { createSession } from "./app/lib/session/session";

async function getUser(email: string, senha: string) {
    const response = await fetch(`${process.env.API_URL}/api/innova-dinamica/login/acessar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            senha: senha,
        }),
    });
    const data = (await response.json()) as LoginResponse;

    if (data.status === 1) {
        return data.dados_usuario;
    }

    return null;
}

export const { auth, handlers, signIn, signOut } = NextAuth({
    ...authConfig,
    secret: process.env.AUTH_SECRET,
    // debug: process.env.NODE_ENV != "production",
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24,
    },
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                user: { label: "user", type: "text" },
                password: { label: "password", type: "password" },
                remember: { type: "checkbox", defaultChecked: false },
            },

            async authorize(credentials) {
                if (!credentials) {
                    throw new Error("Não foram inseridas as credenciais na requisição do login");
                }

                const user = await getUser(credentials.user as string, credentials.password as string);
                if (!user) {
                    throw new Error("Usuário/senha incorretos.");
                }

                let userToken;
                if (credentials.remember) {
                    userToken = await createSession(user);
                }

                const remember = credentials.remember === true;

                return {
                    id: user.codigo_usuario,
                    name: user.nome_usuario,
                    accessToken: userToken,
                    remember,
                };
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (user) {
                if (account?.provider === "credentials") {
                    return true;
                }
            }
            return false;
        },
        async session({ session, user, token }) {
            session.remember = token.remember;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.remember = (user as User).remember ?? false;

                const now = Math.floor(Date.now() / 1000);
                token.exp = token.remember
                    ? now + 60 * 60 * 24 * 30 // 30 dias
                    : now + 60 * 60 * 2;
            }
            return token;
        },
    },
});
