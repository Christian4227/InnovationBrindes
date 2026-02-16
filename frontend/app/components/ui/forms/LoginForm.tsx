"use client";
import handlerLogin from "@/app/actions/loginAction";
import { useActionState, useEffect } from "react";
import Link from "next/link";
import Toast from "../messages/Toast";
import { toast } from "react-toastify";
// import Image from "next/image";

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(handlerLogin, null);

    useEffect(() => {
        if (state?.error) {
            toast.error(state.message);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <>
            <h1 className="text-[var(--cor-primaria)] text-center">Bem-vindo a Innovation Brindes</h1>
            <article className="flex justify-center gap-4 grow bg-[var(--cor-primaria,#7fbc03)] rounded-[15px] px-4 py-6 pt-18 max-lg:px-4 max-md:px-8 max-md:py-10">
                <form action={formAction} className="flex flex-col items-center justify-center gap-3 max-w-[380px] self-stretch grow">
                    <div className="flex flex-col items-start gap-8 self-stretch max-md:gap-4">
                        <div className="flex flex-col items-start gap-5 self-stretch">
                            <div className="relative flex items-start gap-3 rounded-[50px] bg-white px-4 py-1 box-border self-stretch max-md:px-3">
                                {/* <Image src={} alt="Usuário" className="" /> */}
                                <input
                                    type="text"
                                    name="user"
                                    id="user"
                                    placeholder="Usuário"
                                    autoComplete="username"
                                    defaultValue={state?.values?.user}
                                    className="w-full bg-transparent outline-none"
                                />
                            </div>

                            <div className="relative flex items-start gap-3 rounded-[50px] bg-white px-4 py-1 box-border self-stretch max-md:px-3">
                                {/* <Image src={} alt="Senha" className="" /> */}
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Senha"
                                    autoComplete="current-password"
                                    defaultValue={state?.values?.password}
                                    className="w-full bg-transparent"
                                />
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
                    <input type="submit" disabled={isPending} className="btn-primary-white login-btn" value={isPending ? "Enviando..." : "Login"} />
                </form>
            </article>

            <Toast />
        </>
    );
}
