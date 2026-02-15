import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const fd = await req.formData();
    const user = fd.get("user");
    const password = fd.get("password");

    return Response.json({
        status: 1,
        message: "Sucesso",
        token_de_acesso: "token",
        dados_usuario: {
            codigo_usuario: "30",
            nome_usuario: "DINAMICA",
            codigo_grupo: "0",
            nome_grupo: "ADMIN",
        },
    });
}
