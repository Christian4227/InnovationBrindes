type FormatType = "long";
export function formatarData(data: string | number = Date.now(), type: FormatType): string {
    const date = new Date(data);

    let options: Intl.DateTimeFormatOptions = {};

    switch (type) {
        case "long":
            options = {
                weekday: "long", // quarta-feira
                day: "2-digit", // 17
                month: "2-digit", // 02
                year: "numeric", // 2026
            };
            break;
        default:
            break;
    }

    return date.toLocaleDateString("pt-BR", options);
}
