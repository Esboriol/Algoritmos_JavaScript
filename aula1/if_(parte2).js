const aluno = "Dava Pinto"
const nota1 = 8.9
const nota2 = 3.4
const media = (nota1 + nota2) / 2
const falta = 2

if (media >= 6 && falta < 3) {
    console.log(`Voce foi aprovado com a media de ${media}`)
} else {
    console.log(`Voce foi reprovado com a media ${media} e com ${falta} faltas`);
}