import { Metadata } from "next";
import Login from "./(public)/login/page";

export const metadata: Metadata = {
    title: "Login | Innovation Brindes",
    description: "Bem vindo a Innovation Brindes! Faça o seu login e acompanhe os seus produtos!",
};

export default function Home() {
    return <Login />;
}
