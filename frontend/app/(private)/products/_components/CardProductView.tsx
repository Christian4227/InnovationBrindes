"use client";

import Image from "next/image";
import teste from "@images/next.svg";
import ColorCircleProduct from "./ColorCircleProduct";
import { ProductsList } from "@/app/utils/innova-brindes/products/productsInterfaces";
import { converterPreco } from "@/app/utils/strings/preco";
import Toast from "@/app/components/ui/messages/Toast";

interface Props {
    products: ProductsList[];
    token?: string;
}

export default function CardProductView({ products }: Props) {
    return (
        <>
            <article className="w-full grid p-4 sm:p-6 md:p-8 gap-y-8 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto justify-items-center">
                {products?.map((product) => (
                    <div key={product.codigo} className="w-full flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col items-center gap-1">
                            <h3 className="text-(--cor-texto-preto) text-2xl font-bold uppercase">{product.nome}</h3>
                            <h4 className="text-(--cor-texto-preto) text-xl font-normal">{product.codigo}</h4>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            {/* CARD */}
                            <div className="rounded-[3px] border-2 border-(--cor-borda-card) flex flex-col gap-3 overflow-hidden">
                                <div className="flex flex-col">
                                    <Image src={product.imagem || teste} width={240} height={210} alt={product.nome} className="self-stretch grow h-45 object-cover" />
                                    {/* SUB CARD */}
                                    <div className="w-52.5 rounded-[5px] border-2 border-(--cor-borda-interna) inline-flex items-center gap-2.5">
                                        <Image src={teste} width={57} height={47} alt="embalagem" className="w-14 h-12" />
                                        <span className="flex-1 text-(--cor-texto) text-base font-bold">com embalagem especial</span>
                                    </div>
                                </div>
                                <div className="px-3 pb-4 flex flex-col gap-2">
                                    <div className="text-(--cor-texto-preto) text-sm font-normal line-clamp-2">{product.descricao}</div>
                                    <div className="inline-flex gap-2">
                                        <ColorCircleProduct color="bg-red-900" />
                                        <ColorCircleProduct color="bg-blue-800" />
                                        <ColorCircleProduct color="bg-slate-600" />
                                        <ColorCircleProduct color="bg-blue-400" />
                                        <ColorCircleProduct color="bg-lime-500" />
                                        <ColorCircleProduct color="bg-neutral-700" />
                                    </div>

                                    <div className="inline-flex gap-2">
                                        <ColorCircleProduct color="bg-zinc-100" />
                                        <ColorCircleProduct color="bg-orange-900" />
                                        <ColorCircleProduct color="bg-lime-500" />
                                        <ColorCircleProduct color="bg-teal-400" />
                                    </div>

                                    <div className="inline-flex gap-2">
                                        <ColorCircleProduct color="bg-blue-400" />
                                        <ColorCircleProduct color="bg-orange-600" />
                                        <ColorCircleProduct color="bg-amber-500" />
                                        <ColorCircleProduct color="bg-indigo-950" />
                                    </div>

                                    <div className="flex flex-col items-end gap-1">
                                        <span className="text-right text-(--cor-texto-preto) text-sm font-normal">A partir de</span>
                                        <span className="text-right text-(--cor-texto-preto) text-2xl font-bold">{converterPreco(product.preco)}</span>
                                        <span className="text-right text-(--cor-texto-preto) text-sm font-normal">gerado pela melhor oferta</span>
                                    </div>
                                </div>
                            </div>

                            {/* BOTÃO */}
                            <input
                                type="button"
                                value="Confira"
                                className="self-stretch px-3 py-2 bg-(--cor-primaria) inline-flex justify-center items-center text-(--cor-texto-branco) text-sm font-normal cursor-pointer"
                            />
                        </div>
                    </div>
                ))}
            </article>

            <Toast />
        </>
    );
}
