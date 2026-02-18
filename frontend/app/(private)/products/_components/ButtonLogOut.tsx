"use client";

import { signOut } from "next-auth/react";

interface ButtonLogOutProps {
    color: string;
}
export default function ButtonLogOut({ color }: ButtonLogOutProps) {
    return (
        <div className="self-stretch py-1 border-t border-(--cor-primaria) inline-flex justify-end items-start gap-2.5">
            <button onClick={() => signOut()} className={`justify-start text-(${color}) text-base font-normal`}>
                Sair
            </button>
        </div>
    );
}
