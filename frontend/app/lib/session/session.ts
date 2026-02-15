import { cookies } from "next/headers";
import { generateToken } from "../jwt/jwt";
import { redirect } from "next/navigation";

export async function createSession(email: string) {
    const token = generateToken(email);

    if (!token) return null;

    (await cookies()).set("ib_user", token);
    return token;
}

export async function verifySession() {
    const cookie = (await cookies()).get("ib_user")?.value;

    if (!cookie) redirect("/login");

    return true;
}

export async function deleteSession() {
    (await cookies()).delete("ib_user");
}
