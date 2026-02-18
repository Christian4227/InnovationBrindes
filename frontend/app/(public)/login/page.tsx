import LoginForm from "@/app/(public)/login/_components/LoginForm";
import { auth } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Login | Innovation Brindes",
    description: "Bem vindo a Innovation Brindes! Faça o seu login e acompanhe os seus produtos!",
};

export default async function Login() {
    const session = await auth();

    // 🔐 Se já estiver logado (inclusive com "manter conectado")
    if (session) {
        redirect("/products");
    }

    return (
        <main className="flex flex-col items-center justify-center gap-12 main-login-background">
            <section className="flex flex-col gap-8 px-4 max-md:gap-4">
                <LoginForm />
            </section>
        </main>
    );
}
