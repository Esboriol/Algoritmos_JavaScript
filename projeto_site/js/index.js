let imoveis = buscarTodosImoveis()

if (window.localStorage.getItem("lista") == null) {
    window.localStorage.setItem("lista", JSON.stringify(imoveis))

} else {
    imoveis = JSON.parse(window.localStorage.getItem("lista"))

}

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

    const url = `detalhes.html?imovelId=${imovel.id}`
    a.setAttribute("href", url)

    section.appendChild(a)

    const favId = `fav-${imovel.id}`
    const favorito = document.createElement("img")
    favorito.setAttribute("id", favId)

    if (imovel.favorito == true) {
        favorito.setAttribute("src", "img/favorito.png")
    } else if (imovel.favorito == false) {
        favorito.setAttribute("src", "img/desfavorito.png")
    }

    favorito.setAttribute("class", "favorito")
    favorito.setAttribute("onclick", `favoritar(${JSON.stringify(imovel)})`)

    section.appendChild(favorito)



    const sectionResults = document.getElementById("lista-imoveis")
    sectionResults.appendChild(section)



}

function filtrar() {
    const pesquisa = document.getElementById("pesquisa").value
    listarImoveisComFiltro(pesquisa)
}

function favoritar(imovel) {
    const favId = `fav-${imovel.id}`
    const fav = document.getElementById(favId)
    const posicaoLista = imovel.id - 1

    if (fav.getAttribute("src") == "img/favorito.png") {
        fav.setAttribute("src", "img/desfavorito.png")
        imoveis[posicaoLista].favorito = false
    } else {
        fav.setAttribute("src", "img/favorito.png")
        imoveis[posicaoLista].favorito = true
    }

    window.localStorage.setItem("lista", JSON.stringify(imoveis))
}

function mostrarFavoritos() {
    
    limparLista()

    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];
       
        if (imovel.favorito == true) {
            criarImovelHTML(imovel)

        }

    }
}

function apartamento() {

    const apartamento = document.getElementById("Selecionar_aparta").checked
    
    if(apartamento == true) {

        limparLista()

        for (let i = 0; i < imoveis.length; i++) {
            const algo = imoveis[i];

            if (algo.apartamento == "Sim") {

                criarImovelHTML(algo)
                
            }
            
        }
        
    } else {

        limparLista()
        mostrarTodosOsImoveis()
        
    }

    if(apartamento == true && document.getElementById("Selecionar_casa").checked == true) {

        limparLista()
        mostrarTodosOsImoveis()

    }

}

function casa() {
    const search = document.getElementById("Selecionar_casa").checked


    if (search == true) {

        limparLista()
        
        for (let i = 0; i < imoveis.length; i++) {
            const naosei = imoveis[i];

            if(naosei.apartamento == "Nao") {

                criarImovelHTML(naosei, false)

            }
            
        }

    } else {

        limparLista()
        mostrarTodosOsImoveis()

    }

    if(search == true && document.getElementById("Selecionar_aparta").checked == true) {

        limparLista()
        mostrarTodosOsImoveis()

    }

}

function filtrarComEnter(tecla) {
    if (tecla.keyCode == 13) {
        tecla.preventDefault()

        filtrar()

    }
}

function listarImoveisComFiltro(texto) {

    limparLista()

    if (texto == ''){

        mostrarTodosOsImoveis()

    } else {

        for (let i = 0; i < imoveis.length; i++) {

         const imovel_jason = imoveis[i];

            const textoM = removerAcentos(texto.toUpperCase())
            const estadoImovelM = removerAcentos(imovel_jason.estado.toUpperCase())
            const cidadeImovelM = removerAcentos(imovel_jason.cidade.toUpperCase())

            if (cidadeImovelM.search(textoM) == 0 || estadoImovelM.search(textoM) == 0) {

            criarImovelHTML(imovel_jason, false)
            }
        }
    }

}

function mostrarTodosOsImoveis() {

    limparLista()

    for (let i = 0; i< imoveis.length; i++) {
        const imovel = imoveis[i];

        criarImovelHTML(imovel)
    }
    
}

function removerAcentos(str) {
return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function limparLista() {
    const sectionResults = document.getElementById("lista-imoveis")

    while (sectionResults.lastElementChild) {
        sectionResults.removeChild(sectionResults.lastElementChild)

    }
}

mostrarTodosOsImoveis()
