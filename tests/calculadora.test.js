const { subtrai, ehPar, contarCaracteres } = require("../src/calculadora");

test("subtração entre dois números", () => {
    expect(subtrai(10, 5)).toBe(5);
    expect(subtrai(7, 3)).toBe(4);
});
test ("verificar se um número é par", () => {
    expect(ehPar(4)).toBe(true);
    expect(ehPar(7)).toBe(false);
});

test ("erro ao passar entrada inválida em ehPar", () => {
    expect(() => ehPar("texto")).toThrow("Entrada inválida");
});

test ("contar caracteres de uma string", () => {
    expect(contarCaracteres("teste")).toBe(5);
    expect(contarCaracteres("abc")).toBe(3);
});

test ("erro ao passar entrada inválida em contarCaracteres", () => {
    expect(() => contarCaracteres(123)).toThrow("Entrada inválida");
});