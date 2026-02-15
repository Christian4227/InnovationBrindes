"use client";
import handlerLogin from "@/app/actions/loginAction";
import { useActionState } from "react";
import Link from "next/link";

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(handlerLogin, null);

    return (
        <form action={formAction} method="POST" className="flex flex-col items-center justify-center gap-3 max-w-[380px] self-stretch grow">
            <div className="flex flex-col items-start gap-8 self-stretch">
                <div className="flex flex-col items-start gap-5 self-stretch">
                    <div className="relative flex items-start gap-3 rounded-[50px] bg-white px-8 py-4 box-border self-stretch">
                        <input type="text" name="usuario" id="usuario" placeholder="Usuário" />
                    </div>
                    <div className="relative flex items-start gap-3 rounded-[50px] bg-white px-8 py-4 box-border self-stretch">
                        <input type="password" name="senha" id="senha" placeholder="Senha" />
                    </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-5 text-base text-white">
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" name="manter-logado" id="manter-logado" />
                        <label htmlFor="manter-logado">Manter logado</label>
                    </div>
                    <Link href="#" className="relative">
                        Esqueceu a senha
                    </Link>
                </div>
            </div>
            <input type="submit" value={isPending ? "Processando..." : "Login"} className="btn-primary-white login-btn" />
        </form>
    );
}
