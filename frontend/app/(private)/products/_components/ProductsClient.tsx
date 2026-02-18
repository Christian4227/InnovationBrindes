"use client";

import { useState } from "react";
import useDebounce from "@/app/lib/debounce";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import { ProductsList as ProductsListType } from "@/app/utils/innova-brindes/products/productsInterfaces";

interface Props {
    initialProducts: ProductsListType[];
    token?: string;
}

export default function ProductsClient({ initialProducts, token }: Props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const [queryName, setQueryName] = useState("");
    const [queryPrice, setQueryPrice] = useState("");

    const debouncedSetName = useDebounce((val: string) => setQueryName(val), 500);
    const debouncedSetPrice = useDebounce((val: string) => setQueryPrice(val), 500);

    function handleName(val: string) {
        setName(val);
        debouncedSetName(val);
    }

    function handlePrice(val: string) {
        setPrice(val);
        debouncedSetPrice(val);
    }

    return (
        <>
            <ProductsFilter name={name} price={price} onChangeName={handleName} onChangePrice={handlePrice} />

            <ProductsList queryName={queryName} queryPrice={queryPrice} initialProducts={initialProducts} token={token} />
        </>
    );
}
