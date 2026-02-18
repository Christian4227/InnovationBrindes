"use client";

import { Suspense } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import CardProduct from "./CardProductView";
import { ProductsList as ProductsListType } from "@/app/utils/innova-brindes/products/productsInterfaces";

interface Props {
    queryName: string;
    queryPrice: string;
    initialProducts: ProductsListType[];
    token?: string;
}

function ProductsSkeleton() {
    return (
        <article className="w-full grid p-4 sm:p-6 md:p-8 gap-y-8 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto justify-items-center">
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse h-96">
                    <div className="h-48 bg-gray-200 rounded-t-lg dark:bg-gray-700 w-full"></div>
                    <div className="p-5 space-y-4">
                        <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/2"></div>
                        <div className="h-10 bg-gray-200 rounded dark:bg-gray-700 w-full mt-4"></div>
                    </div>
                </div>
            ))}
        </article>
    );
}

async function fetchProducts({ queryKey }: { queryKey: [string, { nome: string; preco: string; token?: string }] }) {
    const [, { nome, preco, token }] = queryKey;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/innova-dinamica/produtos/listar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nome_produto: nome }),
        cache: "no-store",
    });

    if (!response.ok) throw new Error("Erro ao buscar produtos");

    return response.json();
}

function ProductsQuery(props: Props) {
    const { data } = useSuspenseQuery({
        queryKey: ["products", { nome: props.queryName, preco: props.queryPrice, token: props.token }],
        queryFn: fetchProducts,
    });

    return <CardProduct products={data} token={props.token} />;
}

export default function ProductsList(props: Props) {
    return (
        <Suspense fallback={<ProductsSkeleton />}>
            <ProductsQuery {...props} />
        </Suspense>
    );
}
