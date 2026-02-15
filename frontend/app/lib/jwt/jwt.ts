import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export function generateToken(email: string) {
    return jwt.sign(
        {
            codigo_usuario: 30,
            nome_usuario: "DINAMICA",
            codigo_grupo: 0,
            nome_grupo: "ADMIN",
            email: email,
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
