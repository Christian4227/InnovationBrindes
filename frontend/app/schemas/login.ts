import z from "zod";

export const loginSchema = z.object({
    user: z.string({
        error: "Digite um usuário válido",
    }),
    password: z.string({
        error: "Digite uma senha",
    }),
    remember: z.boolean({
        error: "O manter conectado deve ser informado.",
    }),
});
