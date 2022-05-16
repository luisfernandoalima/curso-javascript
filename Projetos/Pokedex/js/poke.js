function Dex() {
    var Card = document.querySelector('input[name="Pokemon"]:checked').value;
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
    }

}