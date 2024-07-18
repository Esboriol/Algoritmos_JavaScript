import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imovel-financiamento',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './imovel-financiamento.component.html',
  styleUrl: './imovel-financiamento.component.css'
})
export class ImovelFinanciamentoComponent {

  imovel: Imovel | undefined
  valorEntrada: number | null = null
  prazoMeses = 0
  valorParcela = 0

  constructor (
    private imvService: ImovelService,
    private route: ActivatedRoute,
    private rt: Router
  ) {
    const id = this.route.snapshot.params["id"]
    this.imovel = this.imvService.buscarImovelPorId(id)

  
  }

  Voltar () {
    const url = `/detalhes/${this.imovel?.id}`
    this.rt.navigate([url])
  }

  calcular() {

    if(this.valorEntrada == null) {
      this.valorEntrada = 0
    }

    if (this.imovel && this.valorEntrada) {
    const precoImovel = this.imovel?.financiamento[0].valor - this.valorEntrada
    this.valorParcela = precoImovel / this.prazoMeses

    }

  }

}
