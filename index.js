//creo ciclo di box * 100
const containerDom = document.getElementById ('container')

for (let i = 0; i <= 100; i ++) {
    containerDom.innerHTML += `<div class="box">${i}</div>`;
}
//