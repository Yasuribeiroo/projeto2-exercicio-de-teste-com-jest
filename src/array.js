function filtrarPares(numeros) {
    if (!Array.isArray(numeros)) throw new Error("Entrada deve ser um array");
    return numeros.filter(num => num % 2 === 0);
}

module.exports = { filtrarPares };