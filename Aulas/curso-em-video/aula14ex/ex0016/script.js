var contArea = document.querySelector('#contarea')
var btn = document.querySelector('#btn')
var mens = document.querySelector('#frase')
btn.addEventListener('click', contar)

function contar() {
    var inicio = document.querySelector('#start').value
    var fim = document.querySelector('#end').value
    var passo = document.querySelector('#step').value

    if (inicio == '' || fim == '' || passo == '' || passo == 0) {
        contArea.innerHTML = '<p>Impossível contar</p>'
    } else {
        mens.innerHTML = 'Contando:'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c += p) {
                contArea.innerHTML += `${c} \u{1f449}`
            }
        } else {
            //Contagem decrescente
            for (var c = i; c >= f; c -= p) {
                contArea.innerHTML += `${c} \u{1f449}`
            }
        }
        contArea.innerHTML += `\u{1f3c1}`
    }
}