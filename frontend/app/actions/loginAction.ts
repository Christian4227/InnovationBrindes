import z from "zod";
import { loginSchema } from "../schemas/login";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function handlerLogin(_: unknown, formData: FormData) {
    const validateLogin = loginSchema.safeParse({
        user: String(formData.get("user")),
        password: String(formData.get("password")),
        remember: Boolean(formData.get("remember")) ?? false,
    });

    if (!validateLogin.success) {
        return {
            status: 400,
            errors: z.treeifyError(validateLogin.error).properties,
            error: true,
            values: validateLogin?.data ?? {
                user: "",
                password: "",
            },
        };
    }
    let response;

    try {
        response = await signIn("credentials", {
            ...validateLogin.data,
            redirect: false,
        });
    } catch {
        return {
            status: 500,
            message: "Não foi possível realizar o login. Tente novamente.",
            error: true,
        };
    }

    if (!response.error) {
        redirect("/products");
    } else {
        return {
            status: 400,
            message: "Usuário/senha incorretos.",
            error: true,
        };
    }
}
