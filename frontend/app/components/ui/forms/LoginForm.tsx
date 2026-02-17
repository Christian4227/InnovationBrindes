"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import Toast from "../messages/Toast";
import { toast } from "react-toastify";
import handlerLogin from "@/app/actions/loginAction";
import Image from "next/image";
import teste from "@images/next.svg";

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(handlerLogin, null);

    useEffect(() => {
        if (state?.error) {
            toast.error(state.message);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state?.error]);

    return (
        <>
            <h1 className="text-(--cor-primaria) text-center text-5xl lg:text-7xl">Bem-vindo a Innovation Brindes</h1>
            <article className="flex justify-center gap-4 grow bg-(--cor-primaria,#7fbc03) rounded-[15px] px-4 py-6 pt-18 max-lg:px-4 max-md:px-8 max-md:py-10">
                <form action={formAction} className="flex flex-col items-center justify-center gap-3 max-w-95 self-stretch grow">
                    <div className="flex flex-col items-start gap-8 self-stretch max-md:gap-4">
                        <div className="flex flex-col items-start gap-5 self-stretch">
                            <div className="relative flex items-center gap-3 rounded-[50px] bg-white px-4 py-1 box-border self-stretch max-md:px-3 div-campo">
                                <Image src={teste} alt="Usuário" width={24} height={24} />
                                <input
                                    type="text"
                                    name="user"
                                    id="user"
                                    placeholder="Usuário"
                                    autoComplete="username"
                                    defaultValue={state?.values?.user}
                                    className="w-full bg-transparent lg:text-lg"
                                />
                            </div>
                            <div className="relative flex items-center gap-3 rounded-[50px] bg-white px-4 py-1 box-border self-stretch max-md:px-3 div-campo">
                                <Image src={teste} alt="Senha" width={24} height={24} />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Senha"
                                    autoComplete="current-password"
                                    defaultValue={state?.values?.password}
                                    className="w-full bg-transparent lg:text-lg"
                                />
                            </div>
                        </div>
                        <div className="self-stretch flex items-start justify-between gap-5 text-base text-white">
                            <div className="flex gap-3 items-center">
                                <input type="checkbox" name="manter-logado" id="manter-logado" defaultChecked={false} />
                                <label htmlFor="manter-logado" className="text-sm text-white lg:text-lg">
                                    Manter logado
                                </label>
                            </div>
                            <Link href="#" className="text-sm text-white lg:text-lg">
                                Esqueceu a senha
                            </Link>
                        </div>
                    </div>
                    <input type="submit" disabled={isPending} className="btn-primary-white login-btn lg:text-lg" value={isPending ? "Enviando..." : "Login"} />
                </form>
            </article>
            <Toast />
        </>
    );
}
