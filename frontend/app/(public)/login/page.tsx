import LoginForm from "@/app/components/ui/forms/LoginForm";

export default function Login() {
    return (
        <main className="flex flex-col items-center justify-center gap-12">
            <section className="flex flex-col gap-8 px-4 max-md:gap-4">
                <LoginForm />
            </section>
        </main>
    );
}
