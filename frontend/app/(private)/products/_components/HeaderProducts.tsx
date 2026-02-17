"use client";

import Image from "next/image";
import teste from "@images/next.svg";

export default function HeaderProducts() {
    return (
        <header className="w-full px-3 py-4 bg-(--cor-primaria) inline-flex justify-between items-center mt-12">
            <Image src={teste} alt="Logo Innovation Brindes" width={84} height={24} className="text-(--cor-texto-branco) text-sm font-normal" />
            <div className="flex items-center gap-6">
                <div className="inline-flex justify-center items-center gap-3">
                    <Image src={teste} alt="e-mail" width={24} height={48} className="justify-start text-cor-texto-branco text-xl font-normal" />
                    <Image src={teste} alt="telefone" width={24} height={24} className="justify-start text-cor-texto-branco text-xl font-normal" />
                    <Image src={teste} alt="foto" width={24} height={24} className="justify-start text-cor-texto-branco text-xl font-normal" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-(--cor-texto-branco) text-base font-normal">Ana Carol Machado</span>
                    <span className="text-(--cor-texto-branco) text-sm font-normal">Quarta, 29/02/2020</span>
                </div>
            </div>
        </header>
    );
}
