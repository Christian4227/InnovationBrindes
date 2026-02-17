import CardProduct from "@/app/components/ui/cards/CardProduct";
import { Metadata } from "next";
import HeaderProducts from "./_components/HeaderProducts";

export const metadata: Metadata = {
    title: "Products | Innovation Brindes",
    description: "Acesse os seus produtos, guarde os seus favoritos e divirta-se!",
};

export default async function Products() {
    return (
        <>
            <HeaderProducts />
            {/* <CardProduct /> */}
        </>
    );
}
