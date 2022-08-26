//Como declarar novas funções
function falaOI() {
    console.log('Oie')
}
falaOI()

//Function expression
const souUmDado = function() {
    console.log('Sou um dado!')
}
souUmDado()

//Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function')
}
arrowFunction()

//Função dentro de objetos
const obj = {
    falar() {
        console.log('Estou dentro de um objeto')
    }
}
obj.falar();