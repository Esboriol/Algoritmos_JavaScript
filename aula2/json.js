// vetor diferenciado
const alu = {
    "nome": "Francisco",
    "idade": 17,
    "escola": "Senai",
    "cidade": "Piracicaba",
    "maior_idade": false
}

console.log(`O aluno ${alu.nome} mora na cidade de ${alu.cidade}`);
console.log(`O aluno${alu.nome} tem ${alu.idade}`);

if (alu.idade >= 18) {
    alu.maior_idade == true
}

if (alu.maior_idade == false) {
    console.log("Voce é menor de idade");
}