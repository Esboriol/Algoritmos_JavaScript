const imoveis = [
    {
        "id" : 1,
        "url_foto": "img/1.jpg",
        "nome": "Casa 01",
        "cidade": "Saltinho",
        "estado": "São Paulo"
    },
    {
        "id" : 2,
        "url_foto": "img/2.jpg",
        "nome": "Casa 02",
        "cidade": "Charqueada",
        "estado": "São Paulo"
    },
    {
        "id" : 3,
        "url_foto": "img/3.jpg",
        "nome": "Casa 03",
        "cidade": "Charqueada",
        "estado": "São Paulo"
    }, 
    {
        "id" : 4,
        "url_foto": "img/4.jpg",
        "nome": "Casa 04",
        "cidade": "Charqueada",
        "estado": "São Paulo"
    },
    {
        "id" : 5,
        "url_foto": "img/5.jpg",
        "nome": "Casa 05",
        "cidade": "Charqueada",
        "estado": "São Paulo"
    }, 
    {
        "id" : 6,
        "url_foto": "img/6.jpg",
        "nome": "Casa 06",
        "cidade": "Charqueada",
        "estado": "São Paulo"
    },
    {
        "id" : 7,
        "url_foto": "img/7.jpg",
        "nome": "Casa 07",
        "cidade": "Charqueada",
        "estado": "São Paulo"
    },
    {
        "id" : 8,
        "url_foto": "img/8.jpg",
        "nome": "Casa 08",
        "cidade": "Charqueada",
        "estado": "São Paulo"
    }, 
    {
        "id" : 9,
        "url_foto": "img/9.jpg",
        "nome": "Casa 09",
        "cidade": "Charqueada",
        "estado": "São Paulo"
    },
    {
        "id" : 10,
        "url_foto": "img/10.jpg",
        "nome": "Casa 10",
        "cidade": "Charqueada",
        "estado": "São Paulo"
    }
]


function criarImovelHTML(imovel) {
    const section = document.createElement("section")
    section.setAttribute("class", "listing")

    const img = document.createElement("img")
    img.setAttribute("class", "listing-photo")
    img.setAttribute("src", imovel.url_foto)

    section.appendChild(img)

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "listing-heading")
    h2.textContent = imovel.nome

    section.appendChild(h2)

    const p = document.createElement("p")
    p.setAttribute("class", "listing-location")
    p.textContent = `${imovel.cidade}, ${imovel.estado}`

    section.appendChild(p)


    const a = document.createElement("a")
    a.textContent = "Veja mais"

    section.appendChild(a)

    const sectionResults = document.getElementById("lista-imoveis")
    sectionResults.appendChild(section)



}

for (let i = 0; i< imoveis.length; i++) {
  const imovel = imoveis[i];
  criarImovelHTML(imovel)
    }

