import z from "zod";
import { loginSchema } from "../schemas/login";

export default async function handlerLogin(previousState: unknown, formData: FormData) {
    const validateLogin = loginSchema.safeParse({
        email: formData.get("user"),
        password: formData.get("password"),
    });

    if (!validateLogin.success) {
        return {
            errors: z.treeifyError(validateLogin.error).properties,
            previousState,
        };
    }

    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(validateLogin.data),
        });

        return {
            status: 200,
            data: response.json(),
        };
    } catch (error) {
        return {
            status: 500,
            data: error,
        };
    }
}
