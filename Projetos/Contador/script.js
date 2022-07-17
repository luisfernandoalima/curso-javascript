const btns = document.querySelectorAll('.btn')
var valor = 0
const Avalor = document.querySelector('valor')


btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const estilo = e.currentTarget.classList
        if (estilo.contains('btnD')) {
            valor--
        }
        Avalor.textContent = valor
    })
})