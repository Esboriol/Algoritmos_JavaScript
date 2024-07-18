import { Injectable } from '@angular/core';
import { Imovel } from './imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private imoveisDB: Imovel[] = [
    {
      "id": 1,
      "url_foto": " imagem01.jpg",
      "nome": "Casa de Pobre",
      "cidade": "Casa do Luís (Bueiro)",
      "estado": "Pau Queimado",
      "favorito": false,
      "tipo": "true",
      "latitude": "40.7128",
      "longitude": "74.0060",
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Não, negativo"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "-2"
        },
        {
          "chave": "Banheiros",
          "valor": "É um bueiro então..."
        },
        {
          "chave": "Garagem",
          "valor": "Sim, caso você dirija um rato."
        },
        {
          "chave": "Área",
          "valor": "Todo o planeta Terra"
        },
        {
          "chave": "Valor",
          "valor": "Geralmente é de graça; Usada de brinde para recém-desempregados"
        },
        {
          "chave": "Descrição",
          "valor": "É um bueiro...tem um cheiro horrível, uma aparência horrível, tudo horrível...e tem o Luís"
        }
      ],
      "aluguel": [{
       "chave": "Aluguel mensal",
       "valor": 5000.00
      },
      {
        "chave": "Aluguel anual",
        "valor": 50000.00
      },
      {
        "chave": "Aluguel por dois anos",
        "valor": 190000.00
      }
    ],
    "financiamento": [{
      "chave": "Valor total",
      "valor": 50000.00
    }]
    },
    {
      "id": 2,
      "url_foto": " aiai.jpg",
      "nome": "Casa de Rico",
      "cidade": "Casa do Thomas (Mansão)",
      "estado": "Pau Grande",
      "favorito": false,
      "tipo": "true",
      "latitude": "48.8566",
      "longitude": "2.3522",
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim. 900TB imbutido em cada quarto."
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "Há 25 quartos."
        },
        {
          "chave": "Banheiros",
          "valor": "Contém 30 banheiros."
        },
        {
          "chave": "Garagem",
          "valor": "Contém 5 garagens."
        },
        {
          "chave": "Área",
          "valor": "1.000m³"
        },
        {
          "chave": "Valor",
          "valor": "R$60.000.000,00 no pix"
        },
        {
          "chave": "Descrição",
          "valor": "Uma casa aconchegante e humilde para deixar seu cachorrinho morar."
        }
      ],
      "aluguel": [],
      "financiamento": [],
    },
    {
      "id": 3,
      "url_foto": " 1.jpg",
      "nome": "Sobrado Pequeno",
      "cidade": "Saltinho",
      "estado": "Piracanjuba",
      "favorito": false,
      "tipo": "true",
      "latitude": "-33.8688",
      "longitude": "151.2093",
      "adicionais": [
        {
          "chave": '!',
          "valor": "O proprietário ainda não adicionou informações adicionais."
        }
      ],
      "aluguel": [],
      "financiamento": [],
    },
    {
      "id": 4,
      "url_foto": " 2.jpg",
      "nome": "Apartamento Pequeno",
      "cidade": "Piracicaba",
      "estado": "Canadá",
      "favorito": false,
      "tipo": "false",
      "latitude": "-22.9068",
      "longitude": "-43.1729",
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "1"
        },
        {
          "chave": "Banheiros",
          "valor": "1"
        },
        {
          "chave": "Garagem",
          "valor": "1"
        },
        {
          "chave": "Área",
          "valor": "20²"
        },
        {
          "chave": "Valor",
          "valor": "R$75.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Uma casa pequena, de recomendação, 1 pessoa. Simples, porém aconchegante."
        }
      ],
      "aluguel": [],
      "financiamento": [],

    },
    {
      "id": 5,
      "url_foto": " 3.jpg",
      "nome": "Casarão Florestal",
      "cidade": "Centro",
      "estado": "Suécia",
      "favorito": false,
      "tipo": "true",
      "latitude": "30.0444",
      "longitude": "31.2357",
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim. 2 roteadores imbutidos em cada andar"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "6"
        },
        {
          "chave": "Banheiros",
          "valor": "4"
        },
        {
          "chave": "Garagem",
          "valor": "2"
        },
        {
          "chave": "Área",
          "valor": "650m²"
        },
        {
          "chave": "Valor",
          "valor": "R$850.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Uma casa na floresta muito bonito e aconchegante, boa para agregar muitas pessoas."
        }
      ],
      "aluguel": [],
      "financiamento": [],

    },
    {
      "id": 6,
      "url_foto": " 4.jpg",
      "nome": "Sobrado Pequeno",
      "cidade": "Curitiba",
      "estado": "Nova Guiné",
      "favorito": false,
      "tipo": "true",
      "latitude": "35.6895",
      "longitude": "139.6917",
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim, 1 roteador em cada andar."
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "4"
        },
        {
          "chave": "Banheiros",
          "valor": "2"
        },
        {
          "chave": "Garagem",
          "valor": "1"
        },
        {
          "chave": "Área",
          "valor": "200m²"
        },
        {
          "chave": "Valor",
          "valor": "R$450.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Um sobrado na vizinhança de JoinVille; Simples, bonita e Acolhedora. (Contém uma pequena casinha de ferramentas)"
        }
      ],
      "aluguel": [],
      "financiamento": [],
    },
    {
      "id": 7,
      "url_foto": " 5.jpg",
      "nome": "Condomínio",
      "cidade": "Pau Queimado",
      "estado": "Patagônia",
      "favorito": false,
      "tipo": "true",
      "latitude": "-33.9249",
      "longitude": "18.4241",
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "2"
        },
        {
          "chave": "Banheiros",
          "valor": "1"
        },
        {
          "chave": "Garagem",
          "valor": "Sim"
        },
        {
          "chave": "Área",
          "valor": "50m²"
        },
        {
          "chave": "Valor",
          "valor": "R$35.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Uma pequena casa em um condomínio de qualidade, o qual têm parquinhos, pequenas praças e uma piscina pública para os *moradores*"
        }
      ],
      "aluguel": [],
      "financiamento": [],

    },
    {
      "id": 8,
      "url_foto": " 6.jpg",
      "nome": "Modern Wouse",
      "cidade": "Rio de Janeiro",
      "estado": "Brasil",
      "favorito": false,
      "tipo": "true",
      "latitude": "-34.6037",
      "longitude": "-58.3816",
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim. Um roteador imbutido na cozinha e em cada quarto."
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "4"
        },
        {
          "chave": "Banheiros",
          "valor": "3"
        },
        {
          "chave": "Garagem",
          "valor": "2"
        },
        {
          "chave": "Área",
          "valor": "210m²"
        },
        {
          "chave": "Valor",
          "valor": "R$550.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Uma casa com design moderno e muito linda. Ótima para festas e famílias grandes."
        }
      ],
      "aluguel": [],
      "financiamento": [],

    },
    {
      "id": 9,
      "url_foto": " 7.jpg",
      "nome": "Simples Sobrado",
      "cidade": "Cabo Grande",
      "estado": "Rússia",
      "favorito": false,
      "tipo": "true",
      "latitude": "41.0082",
      "longitude": "28.9784",
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim. (Oscila no inverno)"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "2"
        },
        {
          "chave": "Banheiros",
          "valor": "2"
        },
        {
          "chave": "Garagem",
          "valor": "Não"
        },
        {
          "chave": "Área",
          "valor": "45m²"
        },
        {
          "chave": "Valor",
          "valor": "R$350.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Um pequeno sobrado acolhedor com design retrô. Uma ótima casa para casais!"
        }
      ],
      "aluguel": [],
      "financiamento": [],

    },
    {
      "id": 10,
      "url_foto": " 8.jpg",
      "nome": "Modern Design...?",
      "cidade": "Americana",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "true",
      "latitude": "49.2827",
      "longitude": "-123.1207",
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim. Um roteador imbutido na cozinha e em cada quarto."
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "4"
        },
        {
          "chave": "Banheiros",
          "valor": "3"
        },
        {
          "chave": "Garagem",
          "valor": "2"
        },
        {
          "chave": "Área",
          "valor": "210m²"
        },
        {
          "chave": "Valor",
          "valor": "R$550.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Uma casa com design moderno e muito linda. Ótima para festas e famílias bem grandonas."
        }
      ],
      "aluguel": [],
      "financiamento": [],

    },
    {
      "id": 11,
      "url_foto": " 9.jpg",
      "nome": "Grande Apartamento",
      "cidade": "Cabreúva",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "false",
      "latitude": "-1.2921",
      "longitude": "36.8219",
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "3"
        },
        {
          "chave": "Banheiros",
          "valor": "2"
        },
        {
          "chave": "Garagem",
          "valor": "Sim (Do apartamento)"
        },
        {
          "chave": "Área",
          "valor": "25m²"
        },
        {
          "chave": "Valor",
          "valor": "R$25.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "É um bueiro...tem um cheiro horrível, uma aparência horrível, tudo horrível...e tem o Luís"
        }
      ],
      "aluguel": [],
      "financiamento": [],

    },
    {
      "id": 12,
      "url_foto": " imagem01.jpg",
      "nome": "Casa 10",
      "cidade": "Cabo Frio",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "true",
      "latitude": "64.1355",
      "longitude": "-21.8954",
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Não, negativo"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "-2"
        },
        {
          "chave": "Banheiros",
          "valor": "É um bueiro então..."
        },
        {
          "chave": "Garagem",
          "valor": "Sim, caso você dirija um rato."
        },
        {
          "chave": "Área",
          "valor": "Todo o planeta Terra"
        },
        {
          "chave": "Valor",
          "valor": "Geralmente é de graça; Usada de brinde para recém-desempregados"
        },
        {
          "chave": "Descrição",
          "valor": "É um bueiro...tem um cheiro horrível, uma aparência horrível, tudo horrível...e tem o Luís"
        }
      ],
      "aluguel": [],
      "financiamento": [],

    },
  ]

  buscarTodosImoveis(): Imovel[] {
    return this.imoveisDB
  }

  buscarImovelPorId(id: number): Imovel | undefined {

    let imovel;

    for (let i = 0; i < this.imoveisDB.length; i++) {
      imovel = this.imoveisDB[i];

      if (imovel.id == id) {
        break
      }
    }
    return imovel;
  }

}
