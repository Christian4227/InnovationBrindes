"use client";

export default function HeaderProducts() {
    return (
        <header className="w-full h-23 self-stretch p-6 bg-(--cor-primaria) inline-flex justify-between items-center">
            <div className="text-(--cor-texto-branco) text-sm font-normal">Logo</div>

            <div className="flex items-center gap-6">
                <div className="text-(--cor-texto-branco) text-xl font-normal">Foto</div>

                <div className="w-48 flex flex-col gap-1">
                    <span className="text-(--cor-texto-branco) text-xl font-normal">Ana Carol Machado</span>

                    <span className="text-(--cor-texto-branco) text-sm font-normal">Quarta, 29/02/2020</span>
                </div>
            </div>
        </header>
    );
}
