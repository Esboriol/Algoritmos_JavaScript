const cidade = {
    "nome": "Piracicaba",
    "estado": "São Paulo",
    "bairros": [
        "Centro", "Vila Fátima", "Industrial",
        "Santa Terezinha", "Cecap"
    ]
}

console.log(`A cidade de ${cidade.nome} fica no estado de ${cidade.estado}`);
console.log(`Tem ${cidade.bairros.length} bairros que são: `);

for (let index = 0; index < cidade.bairros.length; index++) {
    const a = cidade.bairros[index]
    console.log(a);
}