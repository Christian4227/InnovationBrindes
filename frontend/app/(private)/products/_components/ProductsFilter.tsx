"use client";

interface Props {
    name: string;
    price: string;
    onChangeName: (v: string) => void;
    onChangePrice: (v: string) => void;
}

export default function ProductsFilter({ name, price, onChangeName, onChangePrice }: Props) {
    return (
        <div className="w-full grid p-4 sm:p-6 md:p-8 gap-y-8 gap-x-6 grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto">
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Nome</label>
                <input className="border border-gray-300 rounded p-2" value={name} onChange={(e) => onChangeName(e.target.value)} placeholder="Nome do produto" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Preço</label>
                <input type="number" className="border border-gray-300 rounded p-2" value={price} onChange={(e) => onChangePrice(e.target.value)} placeholder="Preço do produto" />
            </div>
        </div>
    );
}
