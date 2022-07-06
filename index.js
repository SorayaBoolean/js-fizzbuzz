//creo ciclo di box * 100
const containerDom = document.getElementById ('container')

for (let i = 0; i <= 100; i ++) {
    containerDom.innerHTML += `<div class="box">${i}</div>`;
}
//metto per ogni moltiplicatore di 3 colore verde e parola fizz

//dare una classe a box
let boxDom = document.querySelector ('box');
boxDom.className += 'background' ;

if  (3 % 3 == 0) {
    document.getDocument
}