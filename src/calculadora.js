function subtrai(a, b) {
    return a - b;
}

function ehPar(n) {
    if (typeof n !== "number") throw new Error("Entrada inválida");
    return n % 2 === 0;
}

function contarCaracteres(texto) {
    if (typeof texto !== "string") throw new Error("Entrada inválida");
    return texto.length;
}

module.exports = { subtrai, ehPar, contarCaracteres };