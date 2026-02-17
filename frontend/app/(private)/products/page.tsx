import { Metadata } from "next";
import HeaderProducts from "./_components/HeaderProducts";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CardProduct from "./_components/CardProduct";

export const metadata: Metadata = {
    title: "Products | Innovation Brindes",
    description: "Acesse os seus produtos, guarde os seus favoritos e divirta-se!",
};

export default async function Products() {
    const session = await auth();
    if (!session) redirect("/login");

    return (
        <>
            <HeaderProducts />
            <main className="flex-1 overflow-y-auto">
                <section className="w-full max-w-7xl mx-auto">
                    <article className="w-full grid p-4 sm:p-6 md:p-8 gap-y-8 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto justify-items-center">
                        <CardProduct />
                    </article>
                </section>
            </main>
        </>
    );
}
