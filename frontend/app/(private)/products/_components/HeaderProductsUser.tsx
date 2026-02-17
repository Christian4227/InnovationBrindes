import { formatarData } from "@/app/utils/strings/data";
import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface HeaderProductsUserProps {
    nomeUsuario: string;
    setIsOpen: (newMenuState: boolean) => void;
}

export default function HeaderProductsUser({ nomeUsuario, setIsOpen }: HeaderProductsUserProps) {
    return (
        <aside className="fixed top-0 right-0 bottom-0 h-full w-64 bg-(--cor-fundo) z-40 shadow-lg px-3 py-2 inline-flex flex-col justify-start items-start gap-3 border-l border-(--cor-primaria)">
            <div className="flex justify-end self-stretch">
                <button onClick={() => setIsOpen(false)} className="focus:outline-none">
                    <FontAwesomeIcon icon={faXmark} className="w-8 h-8" />
                </button>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
                <span className="text-(--cor-texto) text-base font-medium">{nomeUsuario}</span>
                <span className="text-(--cor-texto) text-sm font-normal">{formatarData(undefined, "long")}</span>
            </div>
            <div className="self-stretch py-1 border-t border-(--cor-primaria) inline-flex justify-end items-start gap-2.5">
                <button onClick={() => signOut()} className="justify-start text-(--cor-texto) text-base font-normal">
                    Sair
                </button>
            </div>
        </aside>
    );
}
