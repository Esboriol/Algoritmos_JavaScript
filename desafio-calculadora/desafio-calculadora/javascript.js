
const display = document.getElementById("display")

function mostra_display(numero) {

    display.value += numero
}

function calcular() {

    const resultado = eval(display.value)
    display.value = resultado
    
}

function Remover() {
    
    display.value = ""

}

function Modo_numero() {

    display.value = display.value - (display.value * 2)
    
}

function Fracao() {

    display.value = display.value / 100

}