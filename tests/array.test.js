const { filtrarPares } = require("../src/array");

test("Filtrar números pares de um array", () => {
    expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(filtrarPares([10, 15, 20, 25])).toEqual([10, 20]);
});

test("Retornar array vazio se não houver números pares", () => {
    expect(filtrarPares([1, 3, 5, 7])).toEqual([]);
});

test("Erro ao passar entrada inválida", () => {
    expect(() => filtrarPares("texto")).toThrow("Entrada deve ser um array");
});