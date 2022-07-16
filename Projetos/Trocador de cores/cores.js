const cores = ['Red', 'Blue', 'Black', 'White', 'Green', 'Yellow', 'Gray', 'Pink', 'Purple']

const CorArea = document.querySelector('#Cor')

const btn = document.querySelector('#btn')

btn.addEventListener('click', MudaCor)

function MudaCor() {
    var cor = Math.floor(Math.random() * cores.length)
    CorArea.innerHTML = cores[cor]
    document.body.style.backgroundColor = cores[cor]
    console.log(`${cor}     ${cores[cor]}`)
}