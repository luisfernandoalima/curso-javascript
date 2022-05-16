document.body.addEventListener('change', Select)

function Select() {
    var Poke = document.querySelector('input[name="Pokemon"]').value
    var CardSelect = document.querySelector('.D' + Poke)
    body.main.div.style.background = 'red'
}