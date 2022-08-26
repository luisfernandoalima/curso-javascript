var btnAd = document.querySelector('#btnAd')

btnAd.addEventListener('click', Adicionar)

var area = document.querySelector('#campo')

var valor = []

var Crescente = []

function Adicionar() {
    let val = document.querySelector('#numBar')
    let campo = document.querySelector('#numArea')


    for (let c in valor) {
        if (val.value == valor[c]) {
            var repetido = true
        }
    }

    if (val.value < 1 || val.value > 100 || val.value == '' || repetido == true) {
        alert('Valor inválido ou já cadastrado')
    } else {
        valor.push(Number(val.value))
        let item = document.createElement('option')
        item.text = `valor ${val.value} adicionado`
        campo.appendChild(item)
    }
    area.innerHTML = ''
    val.value = ''
    val.focus()
}

function crescente(a, b) {
    return (a - b)
}

function maior() {
    Crescente = valor
    Crescente.sort(crescente)
    let invertir = Crescente.reverse()
    return invertir[0]
}

function menor() {
    Crescente = valor
    Crescente.sort(crescente)
    return Crescente[0]
}

function soma() {
    var Nsoma = 0
    for (let c in valor) {
        Nsoma += valor[c]
    }
    return Nsoma
}

function media() {
    let Ivalor = valor.length
    var Nsoma = 0
    for (let c in valor) {
        Nsoma += valor[c]
    }
    let Ndiv = Nsoma / Ivalor
    return Ndiv
}

var btnFim = document.querySelector('#btnFim')

btnFim.addEventListener('click', Resultados)

function Resultados() {
    let Nmaior = maior()
    let Nmenor = menor()
    let Valsoma = soma()
    let Valmedia = media()

    area.innerHTML = `<p>Ao todo, temos ${valor.length} valores cadastrados</p>`
    area.innerHTML += `<p>O maior valor informado foi ${Nmaior}</p>`
    area.innerHTML += `<p>O menor valor informado foi ${Nmenor}</p>`
    area.innerHTML += `<p>Somando todos os valores temos ${Valsoma}</p>`
    area.innerHTML += `<p>A média dos valores digitados é ${Valmedia}</p>`
}