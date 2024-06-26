
let jogador = "O"
const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const div3 = document.getElementById("div3")
const div4 = document.getElementById("div4")
const div5 = document.getElementById("div5")
const div6 = document.getElementById("div6")
const div7 = document.getElementById("div7")
const div8 = document.getElementById("div8")
const div9 = document.getElementById("div9")

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




    if(div1.textContent == 'X' && div2.textContent == 'X' && div3.textContent == 'X') {
        alert("O jogador X ganhou")
    } else if (div1.textContent == 'O' && div2.textContent == 'O' && div3.textContent == 'O') {
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

    if ( div1.textContent == 'X' && div5 == 'X' && div9 == 'X') {
        alert("O jogador X ganhou")
    } else if (div1.textContent == 'O' && div5 == 'O' && div9 == 'O') {
        alert('O jogador O ganhou')
    }

    if(div3.textContent == 'X' && div5 == 'X' && div7 == 'X') {
        alert("O jogador X ganhou")
    } else if (div3.textContent == 'O' && div5 == 'O' && div7 == 'O') {
        alert("O jogador O ganhou")
    }

    if(div1.textContent == 'X' && div4 == 'X' && div7 == 'X') {
        alert("O jogador X ganhou")
    } else if (div1.textContent == 'O' && div4 == 'O' && div7 == 'O') {
        alert("O jogador O ganhou")
    }

    if(div2.textContent.textContent == 'X' && div5 == 'X' && div8 == 'X') {
        alert("O jogador X ganhou")
    } else if (div2.textContent.textContent == 'O' && div5 == 'O' && div8 == 'O'){
        alert("O jogador O ganhou")
    }

    if(div3.textContent == 'X' && div6 == 'X' && div9 == 'X') {
        alert("O jogador X ganhou")
    } else if (div3.textContent == 'O' && div6 == 'O' && div9 == 'O') {
        alert("O jogador O ganhou")
    }

    reset()
}

function reset() {

    div1.textContent.textContent = ''
    div2.textContent.textContent = ''
    div3.textContent.textContent = ''


}