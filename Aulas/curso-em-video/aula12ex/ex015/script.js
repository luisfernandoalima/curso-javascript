function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#Nasc')
    var res = document.querySelector('#Res')


    if (fano.value.lenght == 0 || fano.value > ano) {
        alert('[ERRO]')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'Menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'JovemH.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'Homem.png')
            } else {
                img.setAttribute('src', 'Idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {

            } else if (idade < 21) {

            } else if (idade < 50) {

            } else {

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}