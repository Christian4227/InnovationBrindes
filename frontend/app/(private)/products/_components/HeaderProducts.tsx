"use client";

import Image from "next/image";
import teste from "@images/next.svg";
import HeaderProductsUser from "./HeaderProductsUser";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { formatarData } from "@/app/utils/strings/data";
import ButtonLogOut from "./ButtonLogOut";

interface HeaderProductsProps {
    nomeUsuario: string;
}

export default function HeaderProducts({ nomeUsuario }: HeaderProductsProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full px-3 py-4 bg-(--cor-primaria) inline-flex justify-between items-center mt-12">
            <Image src={teste} alt="Logo Innovation Brindes" width={84} height={24} className="text-(--cor-texto-branco) text-sm font-normal" />
            <div className="flex items-center gap-6">
                <div className="inline-flex justify-center items-center gap-3">
                    <Image src={teste} alt="e-mail" width={48} height={48} />
                    <Image src={teste} alt="telefone" width={48} height={48} />
                    <Image src={teste} alt="foto" width={48} height={48} />
                </div>
                {/* Desktop e tablet */}
                <div className="max-sm:hidden sm:block">
                    <div className="flex flex-col justify-start items-start gap-1">
                        <span className="text-(--cor-texto-branco) text-base font-medium">{nomeUsuario}</span>
                        <span className="text-(--cor-texto-branco) text-sm font-normal">{formatarData(undefined, "long")}</span>
                    </div>
                    <ButtonLogOut color="var(--cor-texto-branco)" />
                </div>
                {/* Mobile */}
                <div className="max-sm:block sm:hidden relative">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-(--cor-texto-branco) focus:outline-none">
                        <FontAwesomeIcon icon={faBars} className="w-8 h-8" />
                    </button>
                    {isMenuOpen && <HeaderProductsUser nomeUsuario={nomeUsuario} setIsOpen={setIsMenuOpen} />}
                </div>
            </div>
        </header>
    );
}
