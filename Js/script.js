let tn1 = document.getElementById('tn1');
let tn2 = document.getElementById('tn2');
let res = document.getElementById('res');
let operando = null
let soma = document.getElementById('soma')
let sub = document.getElementById('sub')
let mult = document.getElementById('mult')
let divi = document.getElementById('divi')


function operador(op) {
    if (op === '+') {  
        operando = 1
        soma.style.color = 'red'
        sub.style.color = 'black'
        mult.style.color = 'black'
        divi.style.color = 'black'
    }
    if (op === '-'){
        operando = 2
        soma.style.color = 'black'
        sub.style.color = 'red'
        mult.style.color = 'black'
        divi.style.color = 'black'
    }
    else if (op === '*'){
        operando = 3
        soma.style.color = 'black'
        sub.style.color = 'black'
        mult.style.color = 'red'
        divi.style.color = 'black'
    }
    else if(op === '/') {
        operando = 4
        soma.style.color = 'black'
        sub.style.color = 'black'
        mult.style.color = 'black'
        divi.style.color = 'red'
    }
}

function calc() {
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    if (operando == 1) {
        let r = n1 + n2
        res.innerHTML = `O valor da soma de ${n1} e ${n2} é: ${r}`
    }
    else if (operando == 2) {
        let r = n1 - n2
        res.innerHTML = `O valor da subtração de ${n1} e ${n2} é: ${r}`
    }
    else if (operando == 3) {
        let r = n1 * n2
        res.innerHTML = `O valor da multiplicação de ${n1} e ${n2} é: ${r}`
    }
    else if (operando == 4) {
        let r = n1 - n2
        res.innerHTML = `O valor da divisão de ${n1} e ${n2} é: ${r}`
    }
    else{
        res.innerHTML = `Por favor selecione um operador`
    }
}
