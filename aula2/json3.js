const cursos = [
    {
        "id": 1,
        "nome": "Lógica de programação",
        "nivel": "Básico"
    },
    {
        "id": 2,
        "nome": "Sistemas Operacionais",
        "nivel": "Básico"
    },
    {
        "id": 3,
        "nome": "Programação Web Backend",
        "nivel": "Intermediário"
    },
    {
        "id": 4,
        "nome": "Programação Web Frontend",
        "nivel": "Intermediário"
    },
    {
        "id": 5,
        "nome": "Programação Mobile",
        "nivel": "Avançado"
    }
]

for (let index = 0; index < cursos.length; index++) {

    const curso = cursos[index];

    if(curso.nivel == "Intermediário")
        {
        console.log(curso.nome);
    }
}
