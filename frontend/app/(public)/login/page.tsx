import LoginForm from "@/app/(public)/login/_components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | Innovation Brindes",
    description: "Bem vindo a Innovation Brindes! Faça o seu login e acompanhe os seus produtos!",
};

export default function Login() {
    return (
        <main className="flex flex-col items-center justify-center gap-12">
            <section className="flex flex-col gap-8 px-4 max-md:gap-4">
                <LoginForm />
            </section>
        </main>
    );
}
