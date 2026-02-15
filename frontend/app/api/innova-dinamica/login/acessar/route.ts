import { createSession } from "@/app/lib/session/session";
import { LoginInterface } from "@/app/utils/login/loginInterface";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const body: LoginInterface = await req.json();
    const email = body.email;

    try {
        const token = await createSession(email);

        return Response.json({
            status: 200,
            message: "Sucesso",
            token_de_acesso: token,
            dados_usuario: {
                codigo_usuario: "30",
                nome_usuario: "DINAMICA",
                codigo_grupo: "0",
                nome_grupo: "ADMIN",
            },
        });
    } catch (error) {
        return Response.json({
            status: 400,
            message: `Erro ao gerar o token de acesso. Motivo: ${error}}`,
        });
    }
}
