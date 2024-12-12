let tn1 = document.getElementById('tn1');
let tn2 = document.getElementById('tn2');
let res = document.getElementById('res');

function soma() {
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 + n2;
    res.innerHTML = `O valor da soma de ${n1} e ${n2} é: ${s}` 
}
