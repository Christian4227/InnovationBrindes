describe("Variáveis de ambiente", () => {
    it("deve carregar a variável de ambiente do Auth.js", () => {
        expect(process.env.AUTH_SECRET).toBeTruthy();
    });

    it("deve carregar a variável de ambiente Jwt", () => {
        expect(process.env.JWT_SECRET).toBeTruthy();
    });

    it("deve carregar a variável de ambiente API de referência", () => {
        expect(process.env.API_URL).toBeTruthy();
    });
});
