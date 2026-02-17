import { Metadata } from "next";
import HeaderProducts from "./_components/HeaderProducts";
import { auth } from "@/auth";

export const metadata: Metadata = {
    title: "Products | Innovation Brindes",
    description: "Acesse os seus produtos, guarde os seus favoritos e divirta-se!",
};

export default async function Products() {
    const session = await auth();
    if (!session) return <div>Not authenticated</div>;
    return (
        <>
            <HeaderProducts />
        </>
    );
}
