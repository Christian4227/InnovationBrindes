import NextAuth from "next-auth";

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
        maxAge: 60 * 60 * 24 * 30,
    },
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                user: { label: "user", type: "text" },
                password: { label: "password", type: "password" },
                remember: { type: "checkbox" },
            },

            async authorize(credentials) {
                if (!credentials) {
                    throw new Error("Não foram inseridas as credenciais na requisição do login");
                }

                const user = await getUser(credentials.user as string, credentials.password as string);
                if (!user) {
                    throw new Error("Usuário/senha incorretos.");
                }

                const userToken = await createSession(user);

                return {
                    id: user.codigo_usuario,
                    name: user.nome_usuario,
                    accessToken: userToken,
                    remember: credentials.remember,
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
            return session;
        },
        async jwt({ token, user, account, profile }) {
            // Se NÃO marcou "lembrar-me"
            if (token.remember === false || token.remember === "false") {
                // expira em 1 hora (exemplo)
                token.exp = Math.floor(Date.now() / 1000) + 1;
            }
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
    },
});
