
let jogador = "O"

function jogar(identificador) {

    if (jogador == "X"){
        jogador = "O"
    } else if (jogador == "O"){
        jogador = "X"
    }
    const divHTML = document.getElementById(identificador)
    
    divHTML.textContent = jogador

    verificar_ganhador()
    
}

function verificar_ganhador() {

const div1 = document.getElementById("div1").textContent
const div2 = document.getElementById("div2").textContent
const div3 = document.getElementById("div3").textContent
const div4 = document.getElementById("div4").textContent
const div5 = document.getElementById("div5").textContent
const div6 = document.getElementById("div6").textContent
const div7 = document.getElementById("div7").textContent
const div8 = document.getElementById("div8").textContent
const div9 = document.getElementById("div9").textContent


    if(div1 == 'X' && div2 == 'X' && div3 == 'X') {
        alert("O jogador X ganhou")
    } else if (div1 == 'O' && div2 == 'O' && div3 == 'O') {
        alert("O joador O ganhou")
    }

    if (div4 == 'X' && div5 == 'X' && div6 == 'X') {
        alert("O jogador X ganhou")
    } else if (div4 == 'O' && div5 == 'O' && div6 == 'O') {
        alert("O jogador O ganhou")
    }

    if (div7 == 'X' && div8 == 'X' && div9 == 'X') {
        alert("O jogador X ganhou")
    } else if (div7 == 'O' && div8 == 'O' && div9 == 'O') {
        alert("O jogador O ganhou")
    }

    if ( div1 == 'X' && div5 == 'X' && div9 == 'X') {
        alert("O jogador X ganhou")
    } else if (div1 == 'O' && div5 == 'O' && div9 == 'O') {
        alert('O jogador O ganhou')
    }

    if(div3 == 'X' && div5 == 'X' && div7 == 'X') {
        alert("O jogador X ganhou")
    } else if (div3 == 'O' && div5 == 'O' && div7 == 'O') {
        alert("O jogador O ganhou")
    }

    if(div1 == 'X' && div4 == 'X' && div7 == 'X') {
        alert("O jogador X ganhou")
    } else if (div1 == 'O' && div4 == 'O' && div7 == 'O') {
        alert("O jogador O ganhou")
    }

    if(div2 == 'X' && div5 == 'X' && div8 == 'X') {
        alert("O jogador X ganhou")
    } else if (div2 == 'O' && div5 == 'O' && div8 == 'O'){
        alert("O jogador O ganhou")
    }

    if(div3 == 'X' && div6 == 'X' && div9 == 'X') {
        alert("O jogador X ganhou")
    } else if (div3 == 'O' && div6 == 'O' && div9 == 'O') {
        alert("O jogador O ganhou")
    }

    reset()
}

function reset() {


}