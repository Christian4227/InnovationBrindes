import { UserData } from "@/app/utils/login/loginInterface";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export function generateToken(user: UserData) {
    return jwt.sign(
        {
            user,
        },
        secret,
        {
            expiresIn: "1h", // tempo de expiração
            issuer: "api", // opcional (boa prática)
        },
    );
}

export function verifyToken(token: string) {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (err) {
        throw new Error(`Token inválido: ${err}`);
    }
}
