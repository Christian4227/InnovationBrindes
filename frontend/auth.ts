import NextAuth, { User } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { LoginResponse } from "./app/utils/login/loginInterfaces";

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
        return data;
    }

    return null;
}

export const { auth, handlers, signIn, signOut } = NextAuth({
    ...authConfig,
    secret: process.env.AUTH_SECRET,
    trustHost: true,
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
            authorize: async (credentials) => {
                if (!credentials) {
                    throw new Error("Não foram inseridas as credenciais na requisição do login");
                }
                const loginResponse = await getUser(credentials.user as string, credentials.password as string);
                if (!loginResponse) {
                    throw new Error("Usuário/senha incorretos.");
                }
                const remember = credentials.remember === true;

                const user: User = {
                    id: loginResponse.dados_usuario.codigo_usuario,
                    name: loginResponse.dados_usuario.nome_usuario,
                    accessToken: loginResponse.token_de_acesso,
                    remember,
                };

                return user;
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            return true;
        },
        async session({ session, token }) {
            session.user.name = token.name;
            session.user.accessToken = token.accessToken as string;
            // session.accessToken = token.accessToken;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.remember = (user as User).remember ?? false;
                token.accessToken = (user as User).accessToken;

                const now = Math.floor(Date.now() / 1000);
                token.exp = token.remember
                    ? now + 60 * 60 * 24 * 30 // 30 dias
                    : now + 60 * 60 * 2;
            }
            return token;
        },
    },
});
