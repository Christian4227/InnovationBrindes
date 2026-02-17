"use client";

import Image from "next/image";
import teste from "@images/next.svg";

export default function CardProduct() {
    return (
        <div className="w-60 inline-flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col items-center gap-1">
                <h3 className="text-(--cor-texto-preto) text-2xl font-bold">Lanterna</h3>
                <h4 className="text-(--cor-texto-preto) text-1xl font-normal">7563</h4>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
                {/* CARD */}
                <div className="rounded-[3px] border-2 border-(--cor-borda-card) flex flex-col gap-3 overflow-hidden">
                    <div className="flex flex-col">
                        <Image src={teste} width={240} height={210} alt="produto" className="self-stretch grow h-45" />
                        {/* SUB CARD */}
                        <div className="w-52.5 rounded-[5px] border-2 border-(--cor-borda-interna) inline-flex items-center gap-2.5">
                            <Image src={teste} width={57} height={47} alt="embalagem" className="w-14 h-12" />
                            <div className="flex-1 text-(--cor-texto) text-base font-bold">com embalagem especial</div>
                        </div>
                    </div>
                    <div className="px-3 pb-4 flex flex-col gap-2">
                        <div className="text-(--cor-texto-preto) text-sm font-normal">Caneta plástica com funções esferográfica e marca texto, com...</div>

                        <div className="flex flex-col gap-2">
                            <div className="text-(--cor-texto-preto) text-base font-bold">Cores:</div>

                            <div className="flex flex-col gap-2">
                                <div className="inline-flex gap-2">
                                    <div className="w-6 h-6 bg-red-900 rounded-full" />
                                    <div className="w-6 h-6 bg-blue-800 rounded-full" />
                                    <div className="w-6 h-6 bg-slate-600 rounded-full" />
                                    <div className="w-6 h-6 bg-blue-400 rounded-full" />
                                    <div className="w-6 h-6 bg-lime-500 rounded-full" />
                                    <div className="w-6 h-6 bg-neutral-700 rounded-full" />
                                </div>

                                <div className="inline-flex gap-2">
                                    <div className="w-6 h-6 bg-zinc-100 rounded-full" />
                                    <div className="w-6 h-6 bg-orange-900 rounded-full" />
                                    <div className="w-6 h-6 bg-lime-500 rounded-full" />
                                    <div className="w-6 h-6 bg-teal-400 rounded-full" />
                                </div>

                                <div className="inline-flex gap-2">
                                    <div className="w-6 h-6 bg-blue-400 rounded-full" />
                                    <div className="w-6 h-6 bg-orange-600 rounded-full" />
                                    <div className="w-6 h-6 bg-amber-500 rounded-full" />
                                    <div className="w-6 h-6 bg-indigo-950 rounded-full" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                            <div className="text-right text-(--cor-texto-preto) text-sm font-normal">A partir de</div>
                            <div className="text-right text-(--cor-texto-preto) text-2xl font-bold">R$ 2,44</div>
                            <div className="text-right text-(--cor-texto-preto) text-sm font-normal">gerado pela melhor oferta</div>
                        </div>
                    </div>
                </div>

                {/* BOTÃO */}
                <input type="button" value="Confira" className="self-stretch px-3 py-2 bg-(--cor-primaria) inline-flex justify-center items-center text-(--cor-texto-branco) text-sm font-normal" />
            </div>
        </div>
    );
}
