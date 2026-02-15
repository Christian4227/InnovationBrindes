import LoginForm from "@/app/components/ui/forms/LoginForm";

export default function Login() {
    return (
        <main className="flex flex-col items-center justify-center gap-12">
            <section className="flex flex-col gap-8">
                <h1 className="text-[var(--cor-primaria)]">Bem-vindo a Innovation Brindes</h1>
                <article className="flex justify-center gap-4 grow bg-[var(--cor-primaria,#7fbc03)] rounded-[15px] px-4 py-6 pt-18">
                    <LoginForm />
                </article>
            </section>
        </main>
    );
}
