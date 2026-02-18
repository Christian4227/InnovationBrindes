import { Metadata } from "next";
import HeaderProducts from "./_components/HeaderProducts";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CardProduct from "./_components/CardProductView";
import { Suspense } from "react";
import Providers from "@/app/providers";
import ProductsClient from "./_components/ProductsClient";

export const metadata: Metadata = {
    title: "Products | Innovation Brindes",
    description: "Acesse os seus produtos, guarde os seus favoritos e divirta-se!",
};

const getProducts = async (token: string) => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/innova-dinamica/produtos/listar`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await res.json();

        if (data.status === "error") return [];

        if (res.ok) {
            return data || [];
        }
    } catch (err) {
        console.error("Failed to fetch products", err);
        return [];
    }
};

export default async function Products() {
    const session = await auth();
    if (!session) redirect("/login");

    const initialProducts = await getProducts(session?.user?.accessToken as string);

    return (
        <Providers>
            <HeaderProducts nomeUsuario={session?.user?.name ?? ""} />

            <main className="flex-1 overflow-y-auto">
                <section className="w-full max-w-7xl mx-auto">
                    <ProductsClient initialProducts={initialProducts ?? []} token={session?.user?.accessToken} />
                </section>
            </main>
        </Providers>
    );
}
