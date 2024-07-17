interface propriedades {
    chave: String;
    valor: number|String;
}

export interface Imovel {
    id: number;
    url_foto: string;
    nome: string;
    cidade: string;
    estado: string;
    favorito: boolean;
    tipo: string;
    adicionais: propriedades[];
}