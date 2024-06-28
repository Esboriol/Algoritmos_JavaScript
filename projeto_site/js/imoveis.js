const imoveisDB = [
    {
        "id": 1,
        "url_foto": "img/1.jpg",
        "nome": "Palacio do Thomas",
        "cidade": "Saltinho",
        "estado": "São Paulo",
        "apartamento": "Nao",
        "favorito": false,
        "adicionais": [
            {
                "chave": "Quartos disponiveis",
                "valor": 4
            },
            {
                "chave": "Piscina",
                "valor": "Sim"
            }
        ]
    },
    {
        "id": 2,
        "url_foto": "img/2.jpg",
        "nome": "Apartamento do enzogamer_21",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "apartamento": "Sim",
        "favorito": false,
        "adicionais": [
            {
                "chave": "Banheiro",
                "valor": 2
            }
        ]
    },
    {
        "id": 3,
        "url_foto": "img/3.jpg",
        "nome": "Casa de uma familia normal dos EUA",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "apartamento": "Nao",
        "favorito": false,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 5
            },
            {
                "chave": "Quintal",
                "valor": "20 metros²"
            },
            {
                "chave": "Arvores",
                "valor": "Amazonia"
            }
        ]
    },
    {
        "id": 4,
        "url_foto": "img/4.jpg",
        "nome": "Casa 04",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "apartamento": "Nao",
        "favorito": false,
        "adicionais": []
    },
    {
        "id": 5,
        "url_foto": "img/5.jpg",
        "nome": "Casa 05",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "apartamento": "Sim",
        "favorito": false,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 3
            },
        ]
    },
    {
        "id": 6,
        "url_foto": "img/6.jpg",
        "nome": "Casa 06",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "apartamento": "Nao",
        "favorito": false,
        "adicionais": []
    },
    {
        "id": 7,
        "url_foto": "img/7.jpg",
        "nome": "Casa 07",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "apartamento": "Nao",
        "favorito": false,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 3
            },
        ]
    },
    {
        "id": 8,
        "url_foto": "img/8.jpg",
        "nome": "Casa 08",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "apartamento": "Nao",
        "favorito": false,
        "adicionais": []
    },
    {
        "id": 9,
        "url_foto": "img/9.jpg",
        "nome": "Casa 09",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "apartamento": "Sim",
        "favorito": false,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 3
            },
        ]
    },
    {
        "id": 10,
        "url_foto": "img/10.jpg",
        "nome": "Casa 10",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "apartamento": "Nao",
        "favorito": false,
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 3
            },
            {
                "chave": "Piscina",
                "valor": "Sim"
            }
        ]
    }
]

function buscarTodosImoveis() {
    return imoveisDB
}

function buscarImovelPeloId(id) {
    for (let u = 0; u < imoveisDB.length; u++) {
        const imv = imoveisDB[u];

        if (imv.id == id) {

            return imv

        }

    }
}