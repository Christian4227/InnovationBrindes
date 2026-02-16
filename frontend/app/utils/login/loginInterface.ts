export interface LoginInterface {
    email: string;
    password: string;
}

export interface LoginResponse {
    status: number;
    message: string;
    token_de_acesso: string;
    dados_usuario: UserData;
}

export interface UserData {
    codigo_usuario: string;
    nome_usuario: string;
    codigo_grupo: number;
    nome_grupo: string;
}
