"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { loginSchema } from "../schemas/login";
import z from "zod";

export async function authenticate(prevState: string | undefined, formData: FormData) {
    const validateLogin = loginSchema.safeParse({
        user: String(formData.get("user")),
        password: String(formData.get("password")),
        remember: Boolean(formData.get("remember")) ?? false,
    });

    try {
        await signIn("credentials", {
            ...validateLogin.data,
            redirect: false,
            redirectTo: "/products",
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid credentials.";
                default:
                    return "Something went wrong.";
            }
        }
        throw error;
    }
}
