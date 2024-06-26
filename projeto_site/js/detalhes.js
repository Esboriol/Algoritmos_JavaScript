function buscarImovel() {
    const UrlPagina = window.location.href
    const id = UrlPagina.split("=")[1]
    const imvDetalhe = buscarImovelPeloId(id)
    atualizarImovel(imvDetalhe)

}

function atualizarImovel(imovel) {
    const imgImv = document.getElementById("img")
    imgImv.setAttribute("src", imovel.url_foto)

    const h2Imv = document.getElementById("titulo")
    h2Imv.textContent = imovel.nome

    const pImv = document.getElementById("localizacao")
    pImv.textContent = `${imovel.cidade} - ${imovel.estado}`

    const adicionais = imovel.adicionais
    const ul = document.getElementById("lista-adicionais")


    if (adicionais.length == 0) {

    const li = document.createElement("li")
    li.textContent = `Não tem adicionais`
    ul.appendChild(li)
        
            
    } else {

    for (let i = 0; i < adicionais.length; i++) {
        
        const adicional = adicionais[i];
        const chave = adicional.chave
        const valor = adicional.valor

        const li = document.createElement("li")
        li.textContent = `${chave}: ${valor}`

        ul.appendChild(li)
        
    }
}
}