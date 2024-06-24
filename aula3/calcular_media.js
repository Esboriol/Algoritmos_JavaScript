
function calcular_media(n1, n2) {
    const media = (n1 + n2) / 2
    return media
}

let nota = 10
let bucha = 2.5

const media = calcular_media(nota, bucha)

if (media >=6) {
    console.log(`Voce foi aprovado com uma media de ${media}`);
} else {
    console.log(`Voce foi reprovado com uma media de ${media}`);
}