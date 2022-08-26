var btn = document.querySelector('#btn')
btn.addEventListener('click', calc)

function calc() {
    let num = document.querySelector('#campo').value
    let campo = document.querySelector('#seltab')

    if (num == '') {
        alert('[ERRR]')
    } else {
        let n = Number(num)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            campo.appendChild(item)
            c++
        }
    }
}