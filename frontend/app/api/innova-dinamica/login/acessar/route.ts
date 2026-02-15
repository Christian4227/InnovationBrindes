import { LoginInterface } from "@/app/utils/login/loginInterface";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const body: LoginInterface = await req.json();
    const email = body.email;
    const password = body.password;

    return Response.json({
        status: 200,
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
