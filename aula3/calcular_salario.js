
let nome = "Thomas Turbano"

let salario = 2500

let aumento = 10

function novo(n1, n2) {
    const salario = n1 / 100
    const papas = salario * n2
    return (papas + n1)
}
const calcula = novo (salario, aumento)

console.log(`O trabalhador ${nome}, teve um almento de ${aumento} e esta com um salario novo de ${calcula}`);
