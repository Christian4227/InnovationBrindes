import { Metadata } from "next";
import HeaderProducts from "./_components/HeaderProducts";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CardProduct from "./_components/CardProduct";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Products | Innovation Brindes",
    description: "Acesse os seus produtos, guarde os seus favoritos e divirta-se!",
};

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

async function ProductsList({ token }: { token?: string }) {
    let products = [];
    try {
        const res = await fetch(`${process.env.API_URL}/api/innova-dinamica/produtos/listar`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({}),
        });

        if (res.ok) {
            const data = await res.json();
            products = data;
        }
    } catch (error) {
        console.error("Failed to fetch products", error);
    }

    return (
        <article className="w-full grid p-4 sm:p-6 md:p-8 gap-y-8 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto justify-items-center">
            <CardProduct products={products} />
        </article>
    );
}

export default async function Products() {
    const session = await auth();
    if (!session) redirect("/login");

    return (
        <>
            <HeaderProducts nomeUsuario={session?.user?.name ?? ""} />
            <main className="flex-1 overflow-y-auto">
                <section className="w-full max-w-7xl mx-auto">
                    <Suspense fallback={<ProductsSkeleton />}>
                        <ProductsList token={session?.user?.accessToken} />
                    </Suspense>
                </section>
            </main>
        </>
    );
}
