export function converterPreco(preco: number | string = 0.0) {
    if (typeof preco === "string") {
        preco = parseFloat(preco);
    }

    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
