import z from "zod";
import { loginSchema } from "../schemas/login";
import { redirect } from "next/navigation";

export default async function handlerLogin(previousState: unknown, formData: FormData) {
    const validateLogin = loginSchema.safeParse({
        user: String(formData.get("user")),
        password: String(formData.get("password")),
    });

    if (!validateLogin.success) {
        return {
            status: 400,
            errors: z.treeifyError(validateLogin.error).properties,
            error: true,
            previousState,
        };
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/api/innova-dinamica/login/acessar`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(validateLogin.data),
        });
        const data = await response.json();

        if (!response.ok) {
            return {
                status: 401,
                message: data.message,
                error: true,
            };
        }
    } catch (error) {
        return {
            status: 500,
            data: error,
            error: true,
        };
    }

    redirect("/products");
}
