import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imoveisDB: Imovel[] = []
  filtrandoApto = false
  filtrandoCasa = false

  constructor(private imovelService: ImovelService) {
    this.imoveisDB = this.imovelService.buscarTodosImoveis()
  }

  removerAcentos(str: String){
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  favoritar(imovel: Imovel) {

    if (imovel.favorito == false) {
       imovel.favorito = true
       const audio = new Audio('bad-to-the-bone-meme.mp3')
       audio.play()
    } else {
      imovel.favorito = false
    }
  }

  abrirMapa(imovel: Imovel) {

      window.open(`https://www.google.com.br/maps?q=${imovel.latitude},${imovel.longitude}`)
      
  }

  mostrarTodos (desmarcarRadio = false) {

    this.imoveisDB = this.imovelService.buscarTodosImoveis()

    if (desmarcarRadio == true) {
      const inputCasa: any = document.getElementById('radioCasa')
      const inputApto: any = document.getElementById('radioApto')

      if (inputCasa || undefined && inputApto || undefined) {
        inputCasa.checked = false
        inputApto.checked = false
      }
    }
  }

  filtrarPorTipo(tipo: String) {
    
    this.mostrarTodos()

    const listaFiltrada: Imovel[] = []

    for (let i = 0; i < this.imoveisDB.length; i++) {
      const imovel = this.imoveisDB[i];

      if (imovel.tipo == tipo) {
        listaFiltrada.push(imovel)
      }
      
    }
    this.imoveisDB = listaFiltrada

  }

  mostrarFavoritos (desmarcarRadio = false) {
    this.mostrarTodos(true)

    const listaFiltrada: Imovel[] = []
    for (let i = 0; i < this.imoveisDB.length; i++) {
      const imovel = this.imoveisDB[i];
      
      if (imovel.favorito == true) {
        listaFiltrada. push(imovel)
      }

    }
    this.imoveisDB = listaFiltrada
    
  }

  listarImoveisComFiltro(texto: String) {

    this.mostrarTodos(true)

    if (texto == "") {

    this.imoveisDB = this.imovelService.buscarTodosImoveis()

    } else {

      const imoveisFiltrados : Imovel[] = []

      for (let i = 0; i < this.imoveisDB.length; i++) {
        const imovel = this.imoveisDB[i]

        const textoM = this.removerAcentos(texto.toUpperCase())
        const cidadeImovelM = this.removerAcentos(imovel.cidade.toUpperCase())
        const estadoImovelM = this.removerAcentos(imovel.estado.toUpperCase())

        if (cidadeImovelM.search(textoM) == 0 ||
          estadoImovelM.search(textoM) == 0) {

          imoveisFiltrados.push(imovel)
        }
      }
      this.imoveisDB = imoveisFiltrados
    }
  }
}