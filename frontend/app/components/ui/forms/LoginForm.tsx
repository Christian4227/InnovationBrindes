"use client";
import handlerLogin from "@/app/actions/loginAction";
import { useActionState, useEffect } from "react";
import Link from "next/link";
import Toast from "../messages/Toast";
import { toast } from "react-toastify";

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(handlerLogin, null);

    // useEffect(() => {
    //     if (state?.status !== 200 && state?.message) {
    //         toast.error(state.message);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [state]);

    return (
        <>
            <form action={formAction} className="flex flex-col items-center justify-center gap-3 max-w-[380px] self-stretch grow">
                <div className="flex flex-col items-start gap-8 self-stretch">
                    <div className="flex flex-col items-start gap-5 self-stretch">
                        <div className="relative flex items-start gap-3 rounded-[50px] bg-white px-8 py-4 box-border self-stretch">
                            <input type="email" name="user" id="user" placeholder="Usuário" autoComplete="username" defaultValue="" className="w-full bg-transparent outline-none" />
                        </div>

                        <div className="relative flex items-start gap-3 rounded-[50px] bg-white px-8 py-4 box-border self-stretch">
                            <input type="password" name="password" id="password" placeholder="Senha" autoComplete="current-password" defaultValue="" className="w-full bg-transparent outline-none" />
                        </div>
                    </div>

                    <div className="self-stretch flex items-start justify-between gap-5 text-base text-white">
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" name="manter-logado" id="manter-logado" defaultChecked={false} />
                            <label htmlFor="manter-logado">Manter logado</label>
                        </div>

                        {/* Evite href="#" — isso causa mismatch */}
                        <Link href="/forgot-password" className="relative">
                            Esqueceu a senha
                        </Link>
                    </div>
                </div>
                <input type="submit" disabled={isPending} className="btn-primary-white login-btn" value={isPending ? "Processando..." : "Login"} />
            </form>

            <Toast />
        </>
    );
}
