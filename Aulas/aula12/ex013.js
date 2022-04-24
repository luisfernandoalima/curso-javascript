var agora = new Date()
var semana = agora.getDay()

switch (semana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    default:
        console.log('Tenso')
}