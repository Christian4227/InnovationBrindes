import z from "zod";

export const loginSchema = z.object({
    user: z.email({
        error: "Digite um email válido",
    }),
    password: z.string({
        error: "Digite uma senha",
    }),
});
