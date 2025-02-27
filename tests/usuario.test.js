const { usuario } = require("../src/usuario");

test("Verifica se o objeto usuário tem nome, idade e email", () => {
    expect(usuario).toHaveProperty("nome");
    expect(usuario).toHaveProperty("idade");
    expect(usuario).toHaveProperty("email");
});

test("Valores das propriedades do usuário", () => {
    expect(usuario.nome).toBe("João");
    expect(usuario.idade).toBe(25);
    expect(usuario.email).toBe("joao@email.com");
});