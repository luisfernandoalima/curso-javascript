var LastCard = ''

function Dex() {
    var Card = document.querySelector('input[name="Pokemon"]:checked').value;
    var FirstCard = document.querySelector('.D' + Card)
    var PkName = document.querySelector('#Name' + Card)
    var PkType = document.querySelector('#Type' + Card)
    var nameDex = document.querySelector('#NomePokemon')
    var imgDex = document.querySelector('#PokeGif')
    var typeDex = document.querySelector('#type')

    //Atributos do pokemon
    var HP = document.querySelector('#HP')
    var Attack = document.querySelector('#Attack')
    var Defense = document.querySelector('#Defense')
    var Sp_Attack = document.querySelector('#Sp_Attack')
    var Sp_Defense = document.querySelector('#Sp_Defense')
    var Speed = document.querySelector('#Speed')

    //Marcando o bixo
    FirstCard.classList.add('Marcado')
    if (LastCard == '') {
        LastCard = FirstCard
    }
    if (FirstCard != LastCard) {
        LastCard.classList.remove('Marcado')
        LastCard = FirstCard
    }


    console.log(LastCard)


    //Colocando as características na tela
    imgDex.src = 'img/' + Card + '.gif'
    nameDex.innerHTML = PkName.innerHTML
    typeDex.innerHTML = PkType.innerHTML

    //Colocando os atributos
    if (Card == 'P001') {
        HP.value = 45
        Attack.value = 49
        Defense.value = 49
        Sp_Attack.value = 65
        Sp_Defense.value = 65
        Speed.value = 45
    } else if (Card == 'P002') {
        HP.value = 60
        Attack.value = 62
        Defense.value = 63
        Sp_Attack.value = 80
        Sp_Defense.value = 80
        Speed.value = 60
    } else if (Card == 'P003') {
        HP.value = 80
        Attack.value = 82
        Defense.value = 83
        Sp_Attack.value = 100
        Sp_Defense.value = 100
        Speed.value = 80

        //Botão Mega
        nameDex.innerHTML += '     <button id="MegaButton" class="MegaActive"><img src="img/MegaSymbol.png" alt="" id="Megaimg"></button>'
    } else if (Card == 'P004') {
        HP.value = 39
        Attack.value = 52
        Defense.value = 43
        Sp_Attack.value = 60
        Sp_Defense.value = 50
        Speed.value = 65
    } else if (Card == 'P005') {
        HP.value = 58
        Attack.value = 64
        Defense.value = 58
        Sp_Attack.value = 80
        Sp_Defense.value = 65
        Speed.value = 80
    } else if (Card == 'P006') {
        HP.value = 78
        Attack.value = 84
        Defense.value = 78
        Sp_Attack.value = 109
        Sp_Defense.value = 85
        Speed.value = 100

        //Botão Mega
        nameDex.innerHTML += '     <button id="MegaButton" class="MegaActive"><img src="img/MegaSymbol.png" alt="" id="Megaimg"></button>'
    }

}