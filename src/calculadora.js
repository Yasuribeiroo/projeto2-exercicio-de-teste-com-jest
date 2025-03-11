function subtrai(a, b) {
    return a - b;
}

function ehPar(n) {
    return n % 2 === 0 ? `O número ${n} é par` : `O número ${n} não é par`;
}

function contarCaracteres(texto) {
    return `A string ${texto} possui ${texto.length} caracteres`;
}

module.exports = { subtrai, ehPar, contarCaracteres };
