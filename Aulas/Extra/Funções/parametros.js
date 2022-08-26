const função = (a, b, c) => {
    console.log(a, b, c)
}

função(1, 2, 3)

function funcao(a, b = 2, c = 4) {
    console.log(a + b + c)
}
funcao(2, undefined, 20)

function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros)
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }
    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50)